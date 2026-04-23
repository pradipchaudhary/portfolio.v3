import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // const isAdminRoute = req.nextUrl.pathname.startsWith(
  //   "/admin"
  // );

  // if (!isAdminRoute) {
  //   return NextResponse.next();
  // }

  if (!token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

   try {
    await verifyToken(token);
    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete("token");
    return res;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};