import winston from 'winston';
import path from 'path';
const { combine, timestamp, printf, errors } = winston.format;
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} [${level}]: ${stack || message}`;
});
const logDir = path.join(process.cwd(), 'logs');
export const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), errors({ stack: true }), logFormat),
    transports: [
        // ✅ All logs
        new winston.transports.File({
            filename: path.join(logDir, 'app.log'),
        }),
        // ❌ Only errors
        new winston.transports.File({
            filename: path.join(logDir, 'error.log'),
            level: 'error',
        }),
        // 🖥 Console (dev)
        new winston.transports.Console(),
    ],
});
