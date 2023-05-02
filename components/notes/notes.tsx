import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import { Note as NoteType } from '@/components/notes/note'
import { Note } from "@/components/notes/note/note"; 

const notes: NoteType[] = [
    {
      id: 1,
      title: "This is a title",
      content: "This is the content of this note. It's not that interesting tbh..."
    },
    {
      id: 2,
      title: "Another title of a note",
      content: "Here are my thoughts on poptarts. Poptarts are probably one of the best foods in existence",
    }
  ];

export const Notes = () => {
  return (
      <Box>
        {notes.map(({id, title, content}: NoteType) => <Note key={`note-${id}`} content={content} title={title} />)} 
      </Box>
  );
}
