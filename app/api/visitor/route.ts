import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const visitor = await prisma.visitor.upsert({
      where: { id: 1 },
      update: {
        count: { increment: 1 },
      },
      create: {
        id: 1,
        count: 1,
      },
    });

    return Response.json({ count: visitor.count });
  } catch (error) {
    console.error("Visitor API Error:", error);
    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}