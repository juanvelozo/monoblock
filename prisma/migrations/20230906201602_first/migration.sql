-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "privateNote" BOOLEAN NOT NULL DEFAULT false,
    "fixed" BOOLEAN DEFAULT false,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
