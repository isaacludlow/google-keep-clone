import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

interface NoteModelProps {
  isOpen: boolean;
  onClose(): void;
  title: string;
  content: string;
}

export default function NoteModal({
  isOpen,
  onClose,
  title,
  content,
}: NoteModelProps) {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentContent, setCurrentContent] = useState(content);

  function onModalClose(
    originalTitle: string,
    originalContent: string,
    currentTitle: string,
    currentContent: string
  ): void {
    if (originalTitle != currentTitle || originalContent != currentContent) {
      // TODO: Save to database.
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        onModalClose(title, content, currentTitle, currentContent);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalHeader>
          <Editable
            placeholder="Title"
            selectAllOnFocus={false}
            defaultValue={title}
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
            defaultValue={content}
            onSubmit={(value) => {
              setCurrentContent(value);
            }}
          >
            <EditablePreview />
            <EditableTextarea />
          </Editable>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
