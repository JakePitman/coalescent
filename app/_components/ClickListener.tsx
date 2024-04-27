"use client";
import { useEffect } from "react";
import { useDialogueContext } from "@contexts/dialogueContext";

export const ClickListener = () => {
  const { incrementDialogue, dialogueSet } = useDialogueContext();
  useEffect(() => {
    const handleClick = () => {
      incrementDialogue(dialogueSet);
    };

    window.addEventListener("click", handleClick);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [incrementDialogue, dialogueSet]); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return <></>;
};
