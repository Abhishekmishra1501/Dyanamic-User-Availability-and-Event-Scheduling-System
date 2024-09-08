import { Router } from 'express';
import { createSession, getSessions } from '../controllers/sessionController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/session', authMiddleware, createSession);
router.get('/session', authMiddleware, getSessions);

export default router;
