import express from 'express';
import { getAvailabilities, createAvailability } from '../controllers/availabilityController';

const router = express.Router();

// Route to get all availabilities
router.get('/', getAvailabilities);

// Route to create availability
router.post('/', createAvailability);

export default router;
