import { Note } from "@/components/notes/note";
import { prisma } from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    let { id } = req.query;
    const { title, content } = JSON.parse(req.body);
    console.log(title);
    console.log(content);

    try {
      const post = await prisma.note.update({
        where: { id: id as string },
        data: {
          title: title,
          content: content,
        },
      });

      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({
        error: `Note with ID ${id} does not exist in the database or id is missing from url.`,
      });
    }
  }
  if (req.method === "DELETE") {
    let { id } = req.query;

    try {
      const note = await prisma.note.delete({
        where: { id: id as string },
      });

      res.status(204).json(note);
    } catch (error) {
      res.status(400).json({
        error: `Note with ID ${id} does not exist in the database or id is missing from url.`,
      });
    }
  } else {
    return;
  }
}
