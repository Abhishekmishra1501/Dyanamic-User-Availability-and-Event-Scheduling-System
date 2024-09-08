import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import availabilityRoutes from './routes/availabilityRoutes';
import sessionRoutes from './routes/sessionRoutes';
import dotenv from 'dotenv';

dotenv.config(); // To read from .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/session', sessionRoutes);

// MongoDB connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/your-database-name'; // Default to local if not in .env

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Export the app for server.ts to use
export default app;
