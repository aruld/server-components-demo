-- CreateTable
CREATE TABLE "notes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    "title" TEXT,
    "body" TEXT
);
