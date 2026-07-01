import express from 'express';
import {
  createShipment,
  getMyShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
  updateShipmentStatus,
  addTrackingEvent
} from '../controllers/shipmentController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .post(protect, adminOnly, createShipment)
  .get(protect, adminOnly, (req, res) => res.send('Get all shipments')); // Handled in admin optionally

router.get('/my/shipments', protect, getMyShipments);

router.route('/:id')
  .get(protect, getShipmentById)
  .put(protect, adminOnly, updateShipment)
  .delete(protect, adminOnly, deleteShipment);

router.put('/:id/status', protect, adminOnly, updateShipmentStatus);
router.post('/:id/events', protect, adminOnly, addTrackingEvent);

// Note: Public track is in trackingRoutes or here as GET /track/:code
router.get('/track/:code', (req, res) => res.send('Public track route'));

export default router;
