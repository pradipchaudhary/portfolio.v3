/*
  Warnings:

  - The primary key for the `Experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Experience` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Experience_pkey" PRIMARY KEY ("id");
