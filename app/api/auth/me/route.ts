import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export async function GET() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return Response.json(null);
  }

  const user = await verifyToken(token);

  return Response.json(user);
}