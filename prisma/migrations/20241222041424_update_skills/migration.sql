-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "iconImage" TEXT,
ADD COLUMN     "iconImageId" TEXT,
ADD COLUMN     "primaryColor" TEXT,
ADD COLUMN     "secondaryColor" TEXT,
ALTER COLUMN "isHighlighted" SET DEFAULT false;
