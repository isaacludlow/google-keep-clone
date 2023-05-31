import { prisma } from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;

  const result = await prisma.note.create({
    data: {
      title: title,
      content: content,
    },
  });

  res.json(result);
}
