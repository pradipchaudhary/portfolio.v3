import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string;

export function signToken(payload: any) {
  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}