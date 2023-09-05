"use client";

import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Note } from "../notes/note";

interface TiptapEditorProps {
  setEditorRef(currentRef: any): any;
  note: Note | null;
}

const TiptapEditor = ({ setEditorRef, note }: TiptapEditorProps) => {
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
  });

  // if (note) {
  //   console.log("asdf");
  //   editor?.commands.setContent(note.content);
  // }

  // setEditorRef(editor);

  return <EditorContent editor={editor} />;
};

export default TiptapEditor;
