import { prisma } from "@/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, dateLastUpdated, content } = JSON.parse(req.body);

  const result = await prisma.note.create({
    data: {
      title: title,
      content: JSON.stringify(content),
      dateLastUpdated: dateLastUpdated,
    },
  });

  res.json(result);
}
