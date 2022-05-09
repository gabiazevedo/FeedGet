import { PrismaClient } from "@prisma/client";

// cada operação que o prisma fizer no banco de dados aparecerá o log no console.
export const prisma = new PrismaClient({
  log: ['query']
});
