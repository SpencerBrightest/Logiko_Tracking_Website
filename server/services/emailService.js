import nodemailer from 'nodemailer';
import { config } from '../config/env.js';

export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: config.emailHost,
      port: config.emailPort,
      secure: config.emailPort === '465',
      auth: {
        user: config.emailUser,
        pass: config.emailPass,
      },
    });

    const info = await transporter.sendMail({
      from: `"Logiko Support" <${config.emailUser}>`,
      to,
      subject,
      text,
      html,
    });
    console.log(`Email sent: ${info.messageId}`);
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (user) => {
  await sendEmail({
    to: user.email,
    subject: 'Welcome to Logiko!',
    text: `Hi ${user.name}, welcome to Logiko Logistics.`,
    html: `<b>Hi ${user.name}</b>, welcome to Logiko Logistics.`,
  });
};

export const sendShipmentUpdateEmail = async (user, shipment) => {
  await sendEmail({
    to: user.email,
    subject: `Update on Shipment ${shipment.trackingId}`,
    text: `Your shipment status is now: ${shipment.status}`,
    html: `<b>Your shipment status is now:</b> ${shipment.status}`,
  });
};

// ... other mocked emails ...
