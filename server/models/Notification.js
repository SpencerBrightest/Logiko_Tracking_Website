import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['shipment_update', 'delivery_confirmed', 'invoice_ready', 'message_received', 'system'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  relatedShipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipment',
  }
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
