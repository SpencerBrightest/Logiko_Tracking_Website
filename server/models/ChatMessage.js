import mongoose from 'mongoose';

const chatMessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('ChatMessage', chatMessageSchema);
