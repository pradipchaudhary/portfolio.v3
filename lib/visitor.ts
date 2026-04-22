// lib/visitor.ts
import { redis } from "./redis";

const VISITOR_KEY = "visitors:count";
const UNIQUE_TTL = 60 * 60 * 6; // 6 hours

export async function handleVisitor(ip: string) {
  const uniqueKey = `visitor:${ip}`;

  // NX = only set if not exists
  const isNew = await redis.set(uniqueKey, "1", {
    nx: true,
    ex: UNIQUE_TTL,
  });

  if (isNew) {
    await redis.incr(VISITOR_KEY);
  }

  const count = await redis.get<number>(VISITOR_KEY);

  return count ?? 0;
}