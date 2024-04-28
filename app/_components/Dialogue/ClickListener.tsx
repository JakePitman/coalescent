"use client";
import { useEffect } from "react";
import { useDialogueContext } from "@contexts/dialogueContext";

type Props = {
  dialogueIsOpen: boolean;
};
export const ClickListener = ({ dialogueIsOpen }: Props) => {
  const { incrementDialogue, dialogueSet } = useDialogueContext();

  useEffect(() => {
    const handleClick = () => {
      if (dialogueIsOpen) {
        incrementDialogue(dialogueSet);
      }
    };

    window.addEventListener("click", handleClick);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [incrementDialogue, dialogueSet, dialogueIsOpen]);

  return <></>;
};
