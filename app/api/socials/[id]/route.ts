import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request, context: any) {
  const { id } = await context.params; // ✅ critical fix
  const body = await req.json();

  const updated = await prisma.socialLink.update({
    where: { id },
    data: {
      name: body.name,
      href: body.href,
      icon: body.icon,
      color: body.color || null,
      hoverColor: body.hoverColor || null,
      order: body.order ?? 0,
      isActive: body.isActive ?? true,
    },
  });

  return NextResponse.json(updated);
}