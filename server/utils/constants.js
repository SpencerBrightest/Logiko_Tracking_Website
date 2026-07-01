export const SHIPMENT_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PICKED_UP: 'picked_up',
  IN_TRANSIT: 'in_transit',
  CUSTOMS_CLEARANCE: 'customs_clearance',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const TRACKING_EVENT_TYPES = {
  ORDER_CONFIRMED: 'order_confirmed',
  PICKED_UP: 'picked_up',
  IN_TRANSIT: 'in_transit',
  CUSTOMS_CLEARANCE: 'customs_clearance',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  EXCEPTION: 'exception',
  UPDATE: 'update',
};

export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
};

export const NOTIFICATION_TYPES = {
  SHIPMENT_UPDATE: 'shipment_update',
  DELIVERY_CONFIRMED: 'delivery_confirmed',
  INVOICE_READY: 'invoice_ready',
  MESSAGE_RECEIVED: 'message_received',
  SYSTEM: 'system',
};

export const CARGO_TYPES = [
  'electronics', 'clothing', 'food', 'machinery', 'chemicals', 'documents', 'other'
];
