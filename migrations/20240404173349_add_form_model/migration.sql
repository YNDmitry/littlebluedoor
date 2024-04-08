-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "howLong" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
