-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dateCreated" DATETIME,
    "dateLastUpdated" DATETIME,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
