"use client";
import classnames from "classnames";
import { mobileBreakPoint } from "@sharedData/index";
import { useWindowDimensions } from "@/app/_utilities/hooks/useWindowDimensions";
import styles from "./dialogueBox.module.css";
import { FormattedMessage } from "react-intl";

import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  dialogueIsOpen: boolean;
  messageId: string | null | undefined;
};
export const DialogueBox = ({ dialogueIsOpen, messageId }: Props) => {
  const { width } = useWindowDimensions();
  const isMobile = width <= mobileBreakPoint;

  console.log("MESSAGE_ID: ", messageId);

  return (
    <div
      className={classnames(
        styles.container,
        "bg-blue-800 border-white border-2 p-4 rounded w-[60vw] z-10 block absolute top-8 left-1/2 transition-all duration-200 bg-gradient-to-b from-[#000b75] to-[#000640]",
        {
          [styles.containerClosed]: !messageId || !dialogueIsOpen,
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
        {dialogueIsOpen && messageId ? (
          <FormattedMessage id={messageId} defaultMessage={"G'day"} />
        ) : null}
      </p>
      <div
        className={classnames(styles.triangle, "absolute bottom-1 right-1")}
      />
    </div>
  );
};
