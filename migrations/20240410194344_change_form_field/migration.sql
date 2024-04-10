/*
  Warnings:

  - You are about to drop the column `howLong` on the `Form` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Newsletter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `travelDuration` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `date` on the `Form` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "howLong",
ADD COLUMN     "travelDuration" TEXT NOT NULL,
DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_email_key" ON "Newsletter"("email");
