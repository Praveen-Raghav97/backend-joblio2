import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { requestLogger } from './middlewares/requestLogger.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const createApp = (): Application => {
  const app: Application = express();

  // Middlewares
  app.use(express.json());
  app.use(cors());
  app.use(requestLogger);
app.use(errorHandler);
  // Routes
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).send('🚀 Server running');
  });

  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};