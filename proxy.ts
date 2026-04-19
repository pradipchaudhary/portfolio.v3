import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (!isAdminRoute) return NextResponse.next();

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const payload = await verifyToken(token);

  if (!payload) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};