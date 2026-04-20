import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

if (!secret) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export function signToken(payload: any) {
  return jwt.sign(payload, secret, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}