import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import NoteGrid from "@/components/notes/note-grid";
import Sidebar from "@/components/sidebar/sidebar";
import NoteModal from "@/components/notes/note/note-modal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <NoteModal isOpen={isOpen} onClose={onClose} note={null}></NoteModal>

      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <Box m={8}>
          <NoteGrid></NoteGrid>
        </Box>
      </div>
      <button className="fixed bottom-7 right-7" onClick={onOpen}>
        <Box
          fontSize="6xl"
          className="material-symbols-outlined rounded-full bg-indigo-900 p-1 text-white"
        >
          add
        </Box>
      </button>
    </ChakraProvider>
  );
}
