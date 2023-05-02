import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Navbar from './navbar'
import OneEmSpacer from '@/components/layout/one-em-spacer'
import { Note } from '@/models/dtos/Note'
import NoteCard from '@/components/content/note-card'

const notes: Note[] = [
  {
    Id: 1,
    Title: "This is a title",
    Content: "This is the content of this note. It's not that interesting tbh..."
  },
  {
    Id: 2,
    Title: "Another title of a note",
    Content: "Here are my thoughts on poptarts. Poptarts are probably one of the best foods in existence",
  }
];

export default function Home() {
  const noteCards = notes.map(x => <NoteCard key={x.Id} note={x}></NoteCard>);

  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <OneEmSpacer></OneEmSpacer>
      <Box>
        {noteCards} 
      </Box>
    </ChakraProvider>
  );
}
