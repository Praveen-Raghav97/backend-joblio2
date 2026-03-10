import { createApp } from './app.js';
import { logger } from './utils/logger.js';
import { env } from './config/env.js';
export const startServer = () => {
    const app = createApp();
    app.listen(env.PORT, () => {
        logger.info(`Server started on http://localhost:${env.PORT}`);
    });
};
