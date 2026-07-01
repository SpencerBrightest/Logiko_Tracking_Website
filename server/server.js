import express from 'express';
import cors from 'cors';
import { config } from './config/env.js';
import { connectDB } from './config/db.js';

// Middlewares
import { notFound, errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';

// Routes (to be implemented)
// import authRoutes from './routes/authRoutes.js';
// import shipmentRoutes from './routes/shipmentRoutes.js';
// import trackingRoutes from './routes/trackingRoutes.js';
// import invoiceRoutes from './routes/invoiceRoutes.js';
// import notificationRoutes from './routes/notificationRoutes.js';
// import contactRoutes from './routes/contactRoutes.js';
// import chatRoutes from './routes/chatRoutes.js';
// import adminRoutes from './routes/adminRoutes.js';

const app = express();

// Middleware config
app.use(cors({ origin: config.clientUrl }));
app.use(express.json());
app.use(logger);

// Route mounts
app.get('/', (req, res) => {
  res.send('Logiko API is running...');
});

// app.use('/api/auth', authRoutes);
// app.use('/api/shipments', shipmentRoutes);
// app.use('/api/tracking', trackingRoutes);
// app.use('/api/invoices', invoiceRoutes);
// app.use('/api/notifications', notificationRoutes);
// app.use('/api/contact', contactRoutes);
// app.use('/api/chat', chatRoutes);
// app.use('/api/admin', adminRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
if (process.env.NODE_ENV !== 'test') {
  connectDB().then(() => {
    app.listen(config.port, () => {
      console.log(`Server running in ${config.nodeEnv} mode on port ${config.port}`);
    });
  });
}

export default app;
