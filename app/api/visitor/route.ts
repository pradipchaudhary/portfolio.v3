// app/api/visitor/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getClientIP } from "@/lib/get-ip";
import { ratelimit } from "@/lib/rate-limit";
import { handleVisitor } from "@/lib/visitor";

export async function GET(req: NextRequest) {
  try {
    const ip = getClientIP(req);

    // Rate limit
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    // Visitor count
    const count = await handleVisitor(ip);

    return NextResponse.json(
      { count },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Visitor API error:", error);

    return NextResponse.json(
      { count: 0 },
      { status: 500 }
    );
  }
}