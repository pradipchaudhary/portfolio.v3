import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: 'NepCoin Tracker',
        slug: 'nepcoin-tracker',
        description: 'Crypto prices in NPR with clean charts.',
        url: 'https://nepcoin.example.com',
        tags: ['nextjs', 'tailwind', 'prisma']
      },
      {
        title: 'DocsNepal',
        slug: 'docsnepal',
        description: 'All Nepali documents in one searchable place.',
        url: 'https://docsnepal.example.com',
        tags: ['nextjs', 'postgres', 'neon']
      }
    ],
    skipDuplicates: true
  });

}
main().finally(() => prisma.$disconnect());
