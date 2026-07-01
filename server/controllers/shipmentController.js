import Shipment from '../models/Shipment.js';
import TrackingEvent from '../models/TrackingEvent.js';
import Invoice from '../models/Invoice.js';
import { generateTrackingId } from '../utils/generateTrackingId.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';

export const createShipment = async (req, res) => {
  try {
    const trackingId = generateTrackingId();
    const shipment = await Shipment.create({
      ...req.body,
      trackingId,
    });
    
    // Create initial tracking event
    const event = await TrackingEvent.create({
      shipment: shipment._id,
      eventType: 'order_confirmed',
      description: 'Shipment order has been confirmed',
    });
    shipment.timeline.push(event._id);
    await shipment.save();

    successResponse(res, shipment, 'Shipment created successfully', 201);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getMyShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find({ owner: req.user._id }).populate('timeline');
    successResponse(res, shipments);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getShipmentById = async (req, res) => {
  res.send('getShipmentById not fully implemented');
};

export const updateShipment = async (req, res) => {
  res.send('updateShipment not fully implemented');
};

export const deleteShipment = async (req, res) => {
  res.send('deleteShipment not fully implemented');
};

export const updateShipmentStatus = async (req, res) => {
  res.send('updateShipmentStatus not fully implemented (use trackingService)');
};

export const addTrackingEvent = async (req, res) => {
  res.send('addTrackingEvent not fully implemented');
};
