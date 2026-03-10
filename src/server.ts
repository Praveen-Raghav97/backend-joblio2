import { createApp } from './app.js';
import { logger } from './utils/logger.js';
import { env } from './config/env.js';
import { connectDB } from './lib/db.js';

export  const  startServer = async () => {
  const app = createApp();
 await connectDB()

  app.listen(env.PORT, () => {
    logger.info(`Server started on http://localhost:${env.PORT}`);
  });
};