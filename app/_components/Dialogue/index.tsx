"use client";
import { useEffect, useState } from "react";

import { usePageContext } from "@contexts/pageContext";
import { useDialogueContext } from "@contexts/dialogueContext";
import { DialogueBox } from "./DialogueBox";
import { ClickListener } from "./ClickListener";
import { pageTransitionAnimationDelay } from "@sharedData/index";

export const Dialogue = () => {
  const { page } = usePageContext();
  const { dialogue } = useDialogueContext();
  const [dialogueIsOpen, setDialogueIsOpen] = useState<boolean>(true);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [previousPage, setPreviousPage] = useState<string>(page || "/");
  // Adds a delay to the visual re-opening of the dialogue
  // on page change.
  // Does not interfere with how the dialogue object is changed
  useEffect(() => {
    if (page !== previousPage) {
      page && setPreviousPage(page);
      setDialogueIsOpen(false);

      // Clear the previous timeout if it exists
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      setCurrentTimeout(
        setTimeout(() => {
          setDialogueIsOpen(true);
          setCurrentTimeout(null);
        }, pageTransitionAnimationDelay)
      );
    }
  }, [page, previousPage, currentTimeout, dialogueIsOpen]);
  useEffect(() => {
    if (!dialogue || dialogue.text === null) {
      setDialogueIsOpen(false);
    }
  }, [dialogue]);

  return (
    <>
      <ClickListener dialogueIsOpen={dialogueIsOpen} />
      <DialogueBox dialogueIsOpen={dialogueIsOpen} text={dialogue?.text} />
    </>
  );
};
