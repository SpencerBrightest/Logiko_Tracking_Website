import Shipment from '../models/Shipment.js';
import TrackingEvent from '../models/TrackingEvent.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';

export const getTrackingByCode = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({ trackingId: req.params.trackingCode }).populate('timeline');
    if (!shipment) return errorResponse(res, 'Shipment not found', 404);
    successResponse(res, shipment);
  } catch (error) {
    errorResponse(res, error.message);
  }
};

export const getLiveTracking = async (req, res) => {
  res.send('getLiveTracking not fully implemented');
};

export const getTrackingHistory = async (req, res) => {
  res.send('getTrackingHistory not fully implemented');
};

export const addCheckpoint = async (req, res) => {
  res.send('addCheckpoint not fully implemented');
};
