import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
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
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import StarterKit from "@tiptap/starter-kit";
import NoteGrid from "../note-grid";
import { mutate } from "swr";

interface NoteModelProps {
  isOpen: boolean;
  onClose(): void;
  note: Note | null;
}

export default function NoteModal({ isOpen, onClose, note }: NoteModelProps) {
  // const [editorRef, setEditorRef] = useState<Editor>();
  const isNewNote = !!note;
  const [title, setTitle] = useState("");

  async function onModalClose(
    originalContent: JSONContent,
    currentContent: JSONContent
  ): Promise<void> {
    if (originalContent != currentContent) {
      if (note?.id == undefined) {
        const newNote: Note = {
          dateCreated: new Date(),
          dateLastUpdated: new Date(),
          title: title ?? "Untitled",
          content: currentContent,
        };

        await fetch("api/note", {
          method: "POST",
          body: JSON.stringify(newNote),
        });
        mutate("/api/notes");
      } else {
        const updatedNote: Note = {
          id: note.id,
          dateCreated: note.dateCreated,
          dateLastUpdated: new Date(),
          title: title ?? note?.title,
          content: currentContent,
        };

        await fetch(`api/note/${note.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedNote),
        });
        mutate("/api/notes");
      }
    }
  }

  async function deleteNote(noteId: string | undefined): Promise<void> {
    if (noteId != undefined) {
      await fetch(`api/note/${noteId}`, {
        method: "DELETE",
      });
      mutate("/api/notes");
    }
  }

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: `Take a note. You can use regular markdown syntax to format your note`,
        emptyEditorClass: "is-editor-empty",
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    autofocus: true,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg dark:prose-invert focus:outline-none",
      },
    },
    content: note?.content,
  });

  return (
    <Modal
      size="2xl"
      isOpen={isOpen}
      onClose={() => {
        if (editor) {
          onModalClose(note?.content, editor.getJSON());
        }
        onClose();
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
          <ModalHeader>
            <Editable
              placeholder="Untitled"
              selectAllOnFocus={false}
              // Need to figure out why the title is being set to "title"
              defaultValue={note?.title ?? ""}
              onChange={(newTitle) => {
                setTitle(newTitle);
              }}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </ModalHeader>
        </ModalHeader>
        <ModalBody>
          {/* <TiptapEditor setEditorRef={setEditorRef} note={note}></TiptapEditor> */}
          <EditorContent editor={editor} />
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
