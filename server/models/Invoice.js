import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
    unique: true,
  },
  shipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shipment',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  items: [{
    description: String,
    quantity: Number,
    unitPrice: Number,
    total: Number,
  }],
  subtotal: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  totalAmount: {
    type: Number,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  status: {
    type: String,
    enum: ['unpaid', 'paid', 'overdue'],
    default: 'unpaid',
  },
  pdfUrl: {
    type: String,
  },
  issuedDate: {
    type: Date,
    default: Date.now,
  },
  dueDate: {
    type: Date,
  },
  paidAt: {
    type: Date,
  },
});

export default mongoose.model('Invoice', invoiceSchema);
