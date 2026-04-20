import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const isDashboardRoute = req.nextUrl.pathname.startsWith(
    "/dashboard"
  );

  if (!isDashboardRoute) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};