import mongoose from 'mongoose';

const shipmentSchema = new mongoose.Schema({
  trackingId: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  origin: {
    city: String,
    country: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  destination: {
    city: String,
    country: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'picked_up', 'in_transit', 'customs_clearance', 'out_for_delivery', 'delivered', 'cancelled'],
    default: 'pending',
  },
  cargoType: {
    type: String,
    enum: ['electronics', 'clothing', 'food', 'machinery', 'chemicals', 'documents', 'other'],
  },
  weight: {
    type: Number, // kg
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
  },
  carrier: {
    type: String,
  },
  vessel: {
    type: String,
  },
  estimatedDelivery: {
    type: Date,
  },
  actualDelivery: {
    type: Date,
  },
  totalCost: {
    type: Number,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice',
  },
  timeline: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TrackingEvent',
  }],
  currentPosition: {
    lat: Number,
    lng: Number,
    updatedAt: Date,
  },
  speed: {
    type: Number, // knots
  },
  notes: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('Shipment', shipmentSchema);
