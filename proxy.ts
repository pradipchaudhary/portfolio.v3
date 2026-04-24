import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const loginUrl = new URL("/login", req.url);

  // No token → redirect
  if (!token) {
    return NextResponse.redirect(loginUrl);
  }

  try {
    const payload = await verifyToken(token);

    // Role check (important for CMS)
    if (!payload || payload.role !== "admin") {
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  } catch (err) {
    const res = NextResponse.redirect(loginUrl);

    // Proper cookie invalidation
    res.cookies.set("token", "", {
      path: "/",
      expires: new Date(0),
    });

    return res;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};