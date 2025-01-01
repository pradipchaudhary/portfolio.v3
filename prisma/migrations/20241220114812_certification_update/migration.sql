-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "percentage" INTEGER NOT NULL,
    "iconUrl" TEXT,
    "isHighlighted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certification" (
    "id" SERIAL NOT NULL,
    "certificationYear" INTEGER NOT NULL,
    "achieveCertifications" TEXT[],

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");
