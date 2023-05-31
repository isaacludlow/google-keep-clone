import { Note } from "@/components/notes/note";
import { prisma } from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note[]>
) {
  const notes = await prisma.note.findMany();

  res.status(200).json(notes);
}
