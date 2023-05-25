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

export default function NoteCard({ note: { title, content } }: NoteProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card onClick={onOpen}>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Text noOfLines={4}>{content}</Text>
      </CardBody>

      <NoteModal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        content={content}
      ></NoteModal>
    </Card>
  );
}
