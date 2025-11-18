/*
  Warnings:

  - You are about to drop the column `cardHeader` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `cardInfo` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `innerPage` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `codeSnippets` on the `ProjectOverview` table. All the data in the column will be lost.
  - You are about to drop the column `imges` on the `ProjectOverview` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `ProjectOverview` table. All the data in the column will be lost.
  - You are about to drop the `Attachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Membership` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[projectId]` on the table `ProjectOverview` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `ProjectOverview` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `ProjectOverview` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_membershipId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_membershipId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "cardHeader",
DROP COLUMN "cardInfo",
DROP COLUMN "date",
DROP COLUMN "github",
DROP COLUMN "innerPage",
DROP COLUMN "link",
DROP COLUMN "name",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "githubLink" TEXT,
ADD COLUMN     "startDate" TIMESTAMP(3),
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjectOverview" DROP COLUMN "codeSnippets",
DROP COLUMN "imges",
DROP COLUMN "link",
ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "githubLink" TEXT,
ADD COLUMN     "image" TEXT[],
ADD COLUMN     "imageId" INTEGER NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3),
ALTER COLUMN "title" SET NOT NULL;

-- DropTable
DROP TABLE "Attachment";

-- DropTable
DROP TABLE "Link";

-- DropTable
DROP TABLE "Membership";

-- DropTable
DROP TABLE "Position";

-- DropEnum
DROP TYPE "MembershipType";

-- CreateIndex
CREATE UNIQUE INDEX "ProjectOverview_projectId_key" ON "ProjectOverview"("projectId");
