"use client";
import { useEffect, useState } from "react";
import classnames from "classnames";
import { mobileBreakPoint } from "@sharedData/index";
import { useWindowDimensions } from "@/app/_utilities/hooks/useWindowDimensions";
import { useDialogueContext } from "@contexts/dialogueContext";
import { usePageContext } from "@contexts/pageContext";
import { pageTransitionAnimationDelay } from "@sharedData/index";
import styles from "./dialogue.module.css";

import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const Dialogue = () => {
  const { page } = usePageContext();
  const { width } = useWindowDimensions();
  const { dialogue, incrementDialogue } = useDialogueContext();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  const [previousPage, setPreviousPage] = useState<string>(page || "/");
  const isMobile = width <= mobileBreakPoint;

  // Adds a delay to the visual re-opening of the dialogue
  // on page change.
  // Does not interfere with how the dialogue object is changed
  useEffect(() => {
    if (page !== previousPage) {
      page && setPreviousPage(page);
      setIsOpen(false);

      // Clear the previous timeout if it exists
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      setCurrentTimeout(
        setTimeout(() => {
          setIsOpen(true);
          setCurrentTimeout(null);
        }, pageTransitionAnimationDelay)
      );
    }
  }, [page, previousPage, currentTimeout]);

  if (!dialogue) {
    return null;
  }

  const { text } = dialogue;

  return (
    <div
      className={classnames(
        styles.container,
        "bg-blue-800 border-white border-2 p-4 rounded w-[60vw] z-10 block absolute top-8 left-1/2 transition-all duration-200 bg-gradient-to-b from-[#000b75] to-[#000640]",
        {
          [styles.containerClosed]: !text || !isOpen,
          "w-[60vw]": !isMobile,
          "w-[90vw]": isMobile,
        }
      )}
    >
      <p
        className={classnames(
          spaceMono.className,
          // empty rules stop the dialogue from collapsing suddenly when empty
          "text-white empty:before:content-[''] empty:before:inline-block cursor-default"
        )}
      >
        {/*
         dialogue.text will change before dialogue closes 
         this check will immediately clear the text while closing
        */}
        {isOpen ? text : null}
      </p>
      <div
        className={classnames(styles.triangle, "absolute bottom-1 right-1")}
      />
    </div>
  );
};
