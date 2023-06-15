import { Box, Flex, Heading, Spacer, useDisclosure } from "@chakra-ui/react";
import NoteModal from "../notes/note/note-modal";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        pr={5}
        pl={5}
        align={"center"}
        style={{
          height: "4em",
          width: "100%",
          borderBottom: "1px solid #D6D6D6",
        }}
      >
        <Heading>Google Keep clone</Heading>
        <Spacer></Spacer>
        <button onClick={onOpen}>
          <Box
            fontSize={40}
            color={"#319795"}
            className="material-symbols-outlined"
          >
            add_circle
          </Box>
        </button>
      </Flex>

      <NoteModal
        isOpen={isOpen}
        onClose={onClose}
        note={{ title: "", content: "" }}
      ></NoteModal>
    </>
  );
}
