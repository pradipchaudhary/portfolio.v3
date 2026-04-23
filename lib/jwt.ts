import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET!;

export type TokenPayload = {
  userId: string;
  role: "admin";
};

// 🔑 Sign Token
export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    issuer: "portfolio",
    audience: "admin",
    expiresIn: "7d",
  });
}

// ✅ Verify Token
export function verifyToken(token: string): TokenPayload {
  try {
    const decoded = jwt.verify(token, secret, {
      algorithms: ["HS256"],
      issuer: "portfolio",
      audience: "admin",
    }) as TokenPayload;

    if (!decoded.userId || decoded.role !== "admin") {
      throw new Error("Invalid token");
    }

    return decoded;
  } catch {
    throw new Error("Unauthorized");
  }
}