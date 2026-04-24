import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(
  password: string,
  hash: string
) {
  return bcrypt.compare(password, hash);
}

export async function requireAdmin() {
  const cookieStore = await cookies(); // ✅ FIX

  const token = cookieStore.get("token")?.value;

  if (!token) throw new Error("Unauthorized");

  const payload = await verifyToken(token);

  if (!payload || payload.role !== "admin") {
    throw new Error("Forbidden");
  }

  return payload;
}