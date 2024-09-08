import { Request, Response } from 'express';
import Session from '../models/session';

// Create session
export const createSession = async (req: Request, res: Response) => {
  const { user, start, end, attendees } = req.body;
  try {
    const session = new Session({ user, start, end, attendees });
    await session.save();
    res.status(201).json(session);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

// Get all sessions
export const getSessions = async (req: Request, res: Response) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
