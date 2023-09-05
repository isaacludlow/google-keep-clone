import { Box, SimpleGrid } from "@chakra-ui/react";
import { Note } from "./note";
import NoteCard from "./note/note-card";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NoteGrid() {
  const { data, isLoading } = useSWR("/api/notes", fetcher);
  var notes = data;

  if (isLoading) return <div>Loading your notes...</div>;

  const noteCards = notes?.map((note: Note) => (
    <div className="w-72" key={`note-${note.id}`}>
      <NoteCard note={note}></NoteCard>
    </div>
  ));

  return <Box className="flex flex-wrap gap-5">{...noteCards}</Box>;
}
