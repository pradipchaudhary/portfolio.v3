import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({
    message: "Logged out successfully",
  });

  // 🔥 Clear the cookie
  res.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0), // expire immediately
    path: "/",
  });

  return res;
}