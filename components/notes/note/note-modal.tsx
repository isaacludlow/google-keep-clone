import {
  Button,
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
import TiptapEditor from "@/components/tiptap/tip-tap-editor";
import { Editor, JSONContent } from "@tiptap/react";

interface NoteModelProps {
  isOpen: boolean;
  onClose(): void;
  note: Note | null;
}

export default function NoteModal({ isOpen, onClose, note }: NoteModelProps) {
  const [editorRef, setEditorRef] = useState<Editor>();
  const isNewNote = !!note;

  async function onModalClose(
    originalContent: JSONContent,
    currentContent: JSONContent
  ): Promise<void> {
    if (originalContent != currentContent) {
      if (note?.id == undefined) {
        const newNote: Note = {
          dateCreated: new Date(),
          dateLastUpdated: new Date(),
          content: currentContent,
        };

        console.log(newNote);
        await fetch("api/note", {
          method: "POST",
          body: JSON.stringify(newNote),
        });
      } else {
        const updatedNote: Note = {
          id: note.id,
          dateCreated: note.dateCreated,
          dateLastUpdated: new Date(),
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
      size="2xl"
      isOpen={isOpen}
      onClose={() => {
        onClose();
        console.log("here");
        console.log(note);
        console.log(editorRef);
        if (editorRef) {
          console.log("inside");
          onModalClose(note?.content, editorRef?.getJSON());
        }
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <TiptapEditor setEditorRef={setEditorRef}></TiptapEditor>
        </ModalBody>

        {isNewNote && (
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
        )}
        {!isNewNote && <div className="pb-5"></div>}
      </ModalContent>
    </Modal>
  );
}
