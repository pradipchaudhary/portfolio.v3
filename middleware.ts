import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    // If accessing root path, redirect to home
    if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/home", request.url));
    }
}

export const config = {
    matcher: ["/", "/admin/:path*"],
};
