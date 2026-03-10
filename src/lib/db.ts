import { PrismaClient } from "@prisma/client"
import { logger } from "../utils/logger.js"

import { PrismaNeon } from "@prisma/adapter-neon"

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})

export const prisma = new PrismaClient({
  adapter,
})

export async function connectDB() {
  try {
    await prisma.$connect()
    logger.info("Database connected successfully 🚀")
  } catch (error) {
    logger.error("Database connection error", error)
    process.exit(1)
  }
}