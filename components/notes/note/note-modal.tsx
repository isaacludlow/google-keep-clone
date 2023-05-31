import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "../note";

interface NoteModelProps {
  isOpen: boolean;
  onClose(): void;
  note: Note;
}

export default function NoteModal({ isOpen, onClose, note }: NoteModelProps) {
  const [currentTitle, setCurrentTitle] = useState(note.title);
  const [currentContent, setCurrentContent] = useState(note.content);

  async function onModalClose(
    originalTitle: string,
    originalContent: string,
    currentTitle: string,
    currentContent: string
  ): Promise<void> {
    if (originalTitle != currentTitle || originalContent != currentContent) {
      if (note?.id == undefined) {
        const newNote: Note = {
          title: currentTitle,
          content: currentContent,
        };

        await fetch("api/note", {
          method: "POST",
          body: JSON.stringify(newNote),
        });
      } else {
        const updatedNote: Note = {
          id: note.id,
          title: currentTitle,
          content: currentContent,
        };

        console.log(updatedNote);
        await fetch(`api/note/${note.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedNote),
        });
      }
    }
  }

  async function deleteNote(noteId: string | undefined): Promise<void> {
    if (noteId != undefined) {
      await fetch(`api/note/${noteId}`, {
        method: "DELETE",
      });
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        onModalClose(note.title, note.content, currentTitle, currentContent);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalHeader>
          <Editable
            placeholder="Title"
            selectAllOnFocus={false}
            defaultValue={note.title}
            onSubmit={(value) => {
              setCurrentTitle(value);
            }}
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </ModalHeader>

        <ModalBody>
          <Editable
            placeholder="Take a note..."
            selectAllOnFocus={false}
            defaultValue={note.content}
            onSubmit={(value) => {
              setCurrentContent(value);
            }}
          >
            <EditablePreview />
            <EditableTextarea />
          </Editable>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="red"
            mr={3}
            onClick={() => {
              deleteNote(note.id);
              onClose();
            }}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
