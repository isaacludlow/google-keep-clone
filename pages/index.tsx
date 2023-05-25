import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import NoteGrid from "@/components/notes/note-grid";

export default function Home() {
  return (
    <ChakraProvider>
      <Navbar></Navbar>
      <Box m={10}>
        <NoteGrid></NoteGrid>
      </Box>
    </ChakraProvider>
  );
}
