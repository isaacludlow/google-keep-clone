/*
  Warnings:

  - Added the required column `title` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Note" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dateCreated" DATETIME,
    "dateLastUpdated" DATETIME,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
INSERT INTO "new_Note" ("content", "dateCreated", "dateLastUpdated", "id") SELECT "content", "dateCreated", "dateLastUpdated", "id" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
