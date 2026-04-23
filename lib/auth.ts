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
  const token = cookies().get("token")?.value;

  if (!token) throw new Error("Unauthorized");

  return await verifyToken(token);