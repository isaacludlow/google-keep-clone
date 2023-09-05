/*
  Warnings:

  - You are about to drop the column `title` on the `Note` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dateCreated" DATETIME,
    "dateLastUpdated" DATETIME,
    "content" TEXT NOT NULL
);
INSERT INTO "new_Note" ("content", "id") SELECT "content", "id" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
