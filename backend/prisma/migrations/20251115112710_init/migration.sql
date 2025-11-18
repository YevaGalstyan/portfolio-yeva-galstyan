/*
  Warnings:

  - You are about to drop the column `endDate` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `organization` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the `Degree` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imgUrl` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionName` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Membership` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('INTERNSHIP', 'TRAINING', 'EDUCATION', 'MEMBERSHIP', 'CONFERENCE');

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "endDate",
DROP COLUMN "organization",
DROP COLUMN "role",
DROP COLUMN "startDate",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "period" TEXT NOT NULL,
ADD COLUMN     "positionName" TEXT NOT NULL,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "type" "MembershipType" NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- DropTable
DROP TABLE "Degree";

-- DropTable
DROP TABLE "Experience";

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "date" TEXT,
    "link" TEXT,
    "description" TEXT,
    "github" TEXT,
    "cardHeader" TEXT NOT NULL,
    "cardInfo" TEXT NOT NULL,
    "innerPage" BOOLEAN NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectOverview" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "link" TEXT,
    "codeSnippets" TEXT[],
    "imges" TEXT[],

    CONSTRAINT "ProjectOverview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "positionName" TEXT NOT NULL,
    "period" TEXT,
    "companyName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skills" TEXT[],
    "url" TEXT,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" SERIAL NOT NULL,
    "membershipId" INTEGER NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileLink" TEXT NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "membershipId" INTEGER NOT NULL,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectOverview" ADD CONSTRAINT "ProjectOverview_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
