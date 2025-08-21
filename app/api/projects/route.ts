import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs'; // using Prisma's Node driver

export async function GET() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.project.create({
    data: {
      title: body.title,
      slug: body.slug,
      description: body.description,
      url: body.url ?? null,
      tags: body.tags ?? [],
    },
  });
  return NextResponse.json(created, { status: 201 });
}
