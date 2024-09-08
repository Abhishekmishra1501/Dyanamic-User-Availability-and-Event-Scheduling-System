import { Request, Response } from 'express';
import Availability from '../models/availability';

// Get all availabilities
export const getAvailabilities = async (req: Request, res: Response) => {
  try {
    const availabilities = await Availability.find();
    res.json(availabilities);
  } catch (err) {
    res.status(500).json({ error: 'An unknown error occurred' });
  }
};

// Create availability
export const createAvailability = async (req: Request, res: Response) => {
  const { email, start, end } = req.body;
  try {
    const availability = new Availability({ email, start, end });
    await availability.save();
    res.status(201).json(availability);
  } catch (err) {
    res.status(500).json({ error: 'An unknown error occurred' });
  }
};
