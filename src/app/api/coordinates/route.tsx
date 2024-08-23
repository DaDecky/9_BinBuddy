import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const coordinates = await prisma.coordinate.findMany();
  return Response.json(coordinates);
}
