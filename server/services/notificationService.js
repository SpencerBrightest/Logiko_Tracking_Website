import Notification from '../models/Notification.js';

export const createNotification = async (userId, type, title, message, relatedShipment = null) => {
  try {
    const notification = await Notification.create({
      user: userId,
      type,
      title,
      message,
      relatedShipment,
    });
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error.message);
  }
};
