"use client";
import { useEffect, useState } from "react";
import classnames from "classnames";
import { mobileBreakPoint } from "@sharedData/index";
import { useWindowDimensions } from "@/app/_utilities/hooks/useWindowDimensions";
import { useDialogueContext } from "@contexts/dialogueContext";
import styles from "./dialogue.module.css";

import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const Dialogue = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= mobileBreakPoint;
  const { dialogue, incrementDialogue } = useDialogueContext();
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (!hasRendered) {
      setHasRendered(true);
    }
  }, [hasRendered, setHasRendered]);

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
          [styles.containerClosed]: !text,
          "w-[60vw]": !isMobile,
          "w-[90vw]": isMobile,
        }
      )}
      onClick={incrementDialogue}
    >
      <p
        className={classnames(
          spaceMono.className,
          // empty rules stop the dialogue from collapsing suddenly when empty
          "text-white empty:before:content-[''] empty:before:inline-block cursor-default"
        )}
      >
        {text}
      </p>
      <div
        className={classnames(styles.triangle, "absolute bottom-1 right-1")}
      />
    </div>
  );
};
