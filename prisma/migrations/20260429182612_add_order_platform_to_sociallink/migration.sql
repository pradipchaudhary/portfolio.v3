/*
  Warnings:

  - You are about to drop the column `hover` on the `SocialLink` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PlatformType" AS ENUM ('GITHUB', 'LINKEDIN', 'TWITTER', 'INSTAGRAM', 'FACEBOOK', 'YOUTUBE', 'DRIBBBLE', 'CUSTOM');

-- AlterTable
ALTER TABLE "SocialLink" DROP COLUMN "hover",
ADD COLUMN     "color" TEXT,
ADD COLUMN     "hoverColor" TEXT,
ADD COLUMN     "platform" "PlatformType" NOT NULL DEFAULT 'CUSTOM';

-- CreateIndex
CREATE INDEX "SocialLink_isActive_order_idx" ON "SocialLink"("isActive", "order");
