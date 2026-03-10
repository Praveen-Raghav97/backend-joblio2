import dotenv from 'dotenv';
import { startServer } from './server.js';
import { logger } from './utils/logger.js';

dotenv.config();

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection', reason as Error);
  process.exit(1);
});

startServer();