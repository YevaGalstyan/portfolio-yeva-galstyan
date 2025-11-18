/*
  Warnings:

  - You are about to drop the column `image` on the `ProjectOverview` table. All the data in the column will be lost.
  - You are about to drop the column `imageId` on the `ProjectOverview` table. All the data in the column will be lost.
  - Added the required column `image` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjectOverview" DROP COLUMN "image",
DROP COLUMN "imageId",
ADD COLUMN     "images" TEXT[];
