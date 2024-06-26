"use client";

import { useEffect, useState } from "react";
import { usePageContext } from "@contexts/pageContext";
import { useDialogueContext } from "@contexts/dialogueContext";
import { Space_Mono } from "next/font/google";
import classnames from "classnames";
import { CgCloseR } from "react-icons/cg";
import { FormattedMessage } from "react-intl";

import {
  JakeData,
  InterestsData,
  ProjectsData,
  BlogData,
  ContactData,
} from "./Data";
import styles from "./IncomingData.module.css";
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const pageToDataMap = {
  "/": null,
  "/jake": <JakeData />,
  "/interests": <InterestsData />,
  "/projects": <ProjectsData />,
  "/blog": <BlogData />,
  "/contact": <ContactData />,
};
const getDataFromPage = (page: keyof typeof pageToDataMap) =>
  pageToDataMap[page];

type ControlBarProps = {
  handleDismiss: () => void;
  senderNameMessageData: { id: string; defaultMessage: string };
};
const ControlBar = ({
  handleDismiss,
  senderNameMessageData,
}: ControlBarProps) => {
  const currentTime = new Date().toLocaleString("en-UK", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });
  const { id, defaultMessage } = senderNameMessageData;

  return (
    <div className="w-full flex mb-3">
      <div className="w-full h-[full] rounded bg-sky-400/30 mr-2 flex items-center justify-center">
        <p className="text-xs">
          <FormattedMessage id={id} defaultMessage={defaultMessage} />:{" "}
          {currentTime}
        </p>
      </div>
      <button onClick={handleDismiss}>
        <CgCloseR className="text-xl" />
      </button>
    </div>
  );
};

export type Props = {
  isForcedOpen?: boolean; // For development purposes
};
export const IncomingData = ({ isForcedOpen }: Props) => {
  const { page } = usePageContext();
  const { dialogue } = useDialogueContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Always open in this case
    if (isForcedOpen) {
      setIsOpen(true);
      return;
    }
    // Close when there's text
    if (dialogue?.messageId || page === "/") {
      setIsOpen(false);
      return;
    }
    // Open when text is finished
    if (!dialogue?.messageId) {
      setIsOpen(true);
      return;
    }
  }, [isForcedOpen, dialogue?.messageId, page]);

  if (!page) return null;

  const data = getDataFromPage(page);

  const handleDismiss = () => {
    if (!isForcedOpen) setIsOpen(false);
  };

  const senderNameMessageData =
    page === "/contact"
      ? {
          id: "incomingDataJakePitman",
          defaultMessage: "Jake Pitman",
        }
      : {
          id: "incomingDataJeromeVI",
          defaultMessage: "Jerome VI",
        };

  return (
    <div
      className={classnames(
        "p-5 bg-blue-950/90 shadow-[0_0_15px_2px_#7Cbdbd_inset] border-2 border-sky-400 rounded-md text-sky-300 sm:w-[40vw] w-[90vw] sm:h-[60] h-[70vh]  top-[2vh]",
        spaceMono.className,
        styles.container,
        { [styles.containerClosed]: !isOpen }
      )}
    >
      {isOpen ? (
        <>
          <ControlBar
            handleDismiss={handleDismiss}
            senderNameMessageData={senderNameMessageData}
          />
          <div
            className={classnames(
              "overflow-scroll h-[95%]",
              styles.dataContainer
            )}
          >
            {data}
          </div>
        </>
      ) : null}
    </div>
  );
};
