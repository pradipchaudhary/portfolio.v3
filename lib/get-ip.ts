// lib/get-ip.ts
import { NextRequest } from "next/server";

export function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return req.headers.get("x-real-ip") || "unknown";
}