// import { prisma } from "@/lib/db";
import { comparePassword } from "@/lib/auth";
import { signToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response("Invalid credentials", { status: 401 });
  }

  const isValid = await comparePassword(password, user.password);

  if (!isValid) {
    return new Response("Invalid credentials", { status: 401 });
  }

  const token = await signToken({
    userId: user.id,
    role: user.role,
  });

  return new Response("Login success", {
    status: 200,
    headers: {
      "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict`,
    },
  });
}