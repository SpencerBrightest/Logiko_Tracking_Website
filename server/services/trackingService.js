import Shipment from '../models/Shipment.js';
import TrackingEvent from '../models/TrackingEvent.js';
import { sendShipmentUpdateEmail } from './emailService.js';
import { createNotification } from './notificationService.js';

export const updateShipmentStatus = async (shipmentId, status, addedBy, description, location) => {
  const shipment = await Shipment.findById(shipmentId).populate('owner');
  if (!shipment) throw new Error('Shipment not found');

  shipment.status = status;
  await shipment.save();

  // Create tracking event
  const event = await TrackingEvent.create({
    shipment: shipment._id,
    eventType: status,
    location: location || 'System Update',
    description: description || `Status updated to ${status}`,
    addedBy
  });

  shipment.timeline.push(event._id);
  await shipment.save();

  // Notify User
  await createNotification(shipment.owner, 'shipment_update', 'Shipment Update', `Your shipment ${shipment.trackingId} status changed to ${status}`, shipment._id);
  
  // Email User
  if (shipment.owner && shipment.owner.email) {
     await sendShipmentUpdateEmail(shipment.owner, shipment);
  }

  return shipment;
};
