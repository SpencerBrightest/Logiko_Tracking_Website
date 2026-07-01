import mongoose from 'mongoose';

const trackingEventSchema = new mongoose.Schema({
  shipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipment',
    required: true,
  },
  eventType: {
    type: String,
    enum: ['order_confirmed', 'picked_up', 'in_transit', 'customs_clearance', 'out_for_delivery', 'delivered', 'exception', 'update'],
    required: true,
  },
  location: {
    type: String,
  },
  coordinates: {
    lat: Number,
    lng: Number,
  },
  description: {
    type: String,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

export default mongoose.model('TrackingEvent', trackingEventSchema);
