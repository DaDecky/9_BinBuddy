import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type Params = { id: String };

export async function GET(request: Request, context: { params: Params }) {
  const coordinate = await prisma.coordinate.findUnique({
    where: {
      id: Number(context.params.id),
    },
  });
  return Response.json(coordinate);
}
