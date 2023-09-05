import { prisma } from "@/db";
import { Note } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note[]>
) {
  const notes = await prisma.note.findMany();
  notes.forEach((note) => (note.content = JSON.parse(note.content)));

  res.status(200).json(notes);
}
