import { SimpleGrid } from "@chakra-ui/react";
import { Note } from "./note";
import NoteCard from "./note/note-card";

const notes: Note[] = [
  {
    id: 1,
    title: "This is a title",
    content:
      "This is the content of this note. It's not that interesting tbh...",
  },
  {
    id: 2,
    title: "Another title of a note",
    content:
      "Here are my thoughts on poptarts. Poptarts are probably one of the best foods in existence. How long can this note get before it starts doing weird stuff?",
  },
];

export default function NoteGrid() {
  const noteCards = notes.map((note) => (
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
