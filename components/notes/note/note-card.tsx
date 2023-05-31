import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Note } from "../note";
import NoteModal from "./note-modal";

interface NoteProps {
  note: Note;
}

export default function NoteCard({ note }: NoteProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card onClick={onOpen}>
      <CardHeader>
        <Heading size="md">{note.title}</Heading>
      </CardHeader>

      <CardBody>
        <Text noOfLines={4}>{note.content}</Text>
      </CardBody>

      <NoteModal isOpen={isOpen} onClose={onClose} note={note}></NoteModal>
    </Card>
  );
}
