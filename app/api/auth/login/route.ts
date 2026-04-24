import { comparePassword } from "@/lib/auth";
import { signToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = loginSchema.parse(body);

  const user = await prisma.user.findUnique({
    where: { email },
  });

  // Prevent timing attacks
  const dummyHash =
    "$2a$10$7EqJtq98hPqEX7fNZaFWoOHi.6e1J8s5G5y5y5y5y5y5y5y5y5y5y";

  const isValid = user
    ? await comparePassword(password, user.password)
    : await comparePassword(password, dummyHash);

  if (!user || !isValid) {
    return Response.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Restrict to admin
  if (user.role !== "admin") {
    return Response.json(
      { success: false, message: "Access denied" },
      { status: 403 }
    );
  }

  const token = await signToken({
    userId: user.id,
    role: user.role,
  });

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return Response.json(
    {
      success: true,
      message: "Login successful",
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}