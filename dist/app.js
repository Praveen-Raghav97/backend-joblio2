import express from 'express';
import cors from 'cors';
import { requestLogger } from './middlewares/requestLogger.js';
import { errorHandler } from './middlewares/errorHandler.js';
export const createApp = () => {
    const app = express();
    // Middlewares
    app.use(express.json());
    app.use(cors());
    app.use(requestLogger);
    app.use(errorHandler);
    // Routes
    app.get('/', (_req, res) => {
        res.status(200).send('🚀 Server running');
    });
    app.get('/health', (_req, res) => {
        res.status(200).json({
            status: 'ok',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
        });
    });
    return app;
};
