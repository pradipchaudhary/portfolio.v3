// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@portfolio.com";
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin user seeded successfully");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });