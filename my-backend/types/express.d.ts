// types/express.d.ts

import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
        user?: { email: string; role: string }; // Adjust 'any' to a more specific type if needed
    }
  }
}
