/*
  Warnings:

  - You are about to drop the column `platform` on the `SocialLink` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SocialLink" DROP COLUMN "platform";

-- DropEnum
DROP TYPE "PlatformType";
