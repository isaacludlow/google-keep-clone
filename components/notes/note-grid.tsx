import { SimpleGrid } from "@chakra-ui/react";
import { Note } from "./note";
import NoteCard from "./note/note-card";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NoteGrid() {
  const { data, isLoading } = useSWR("/api/notes", fetcher);

  if (!data) return <div>Loading your notes...</div>;

  const noteCards = data.map((note: Note) => (
    <NoteCard key={`note-${note.id}`} note={note}></NoteCard>
  ));

  return (
    <SimpleGrid
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      spacing={10}
    >
      {...noteCards}
    </SimpleGrid>
  );
}
