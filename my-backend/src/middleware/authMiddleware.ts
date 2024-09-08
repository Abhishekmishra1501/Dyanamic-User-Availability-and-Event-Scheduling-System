import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    // Use type assertion here to bypass the issue with the `user` property
    (req as any).user = decoded; // Use 'any' type to avoid TypeScript errors
    next();
  });
};

export default authMiddleware;
