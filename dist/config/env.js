import { z } from 'zod';
// Define env schema
const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.string().default('5050'),
    // add more later
    // DATABASE_URL: z.string().url(),
    // JWT_SECRET: z.string().min(10),
});
// Validate process.env
const parsedEnv = envSchema.safeParse(process.env);
if (!parsedEnv.success) {
    console.error('❌ Invalid environment variables:', parsedEnv.error.format());
    process.exit(1);
}
// Export validated env
export const env = {
    NODE_ENV: parsedEnv.data.NODE_ENV,
    PORT: Number(parsedEnv.data.PORT),
};
