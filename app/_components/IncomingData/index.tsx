"use client";

import { useMemo } from "react";
import { usePageContext } from "@contexts/pageContext";
import { useDialogueContext } from "@contexts/dialogueContext";
import { Space_Mono } from "next/font/google";
import classnames from "classnames";
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

export type Props = {
  isForcedOpen?: boolean; // For development purposes
};
export const IncomingData = ({ isForcedOpen }: Props) => {
  const { page } = usePageContext();
  const { dialogue } = useDialogueContext();
  const isOpen = useMemo(() => {
    if (isForcedOpen) return true; // Always open when isForcedOpen
    if (dialogue?.text || page === "/") return false;
    if (!dialogue?.text) return true; // Otherwise open if neg conditions have passed
  }, [isForcedOpen, dialogue?.text, page]);

  if (!page) return null;

  const data = getDataFromPage(page);

  return (
    <div
      className={classnames(
        "p-5 bg-blue-950/90 shadow-[0_0_15px_2px_#7Cbdbd_inset] border-2 border-sky-400 rounded-md text-sky-300 sm:w-[40vw] w-[90vw] h-[60vh] overflow-scroll",
        spaceMono.className,
        styles.container,
        { [styles.containerClosed]: !isOpen }
      )}
    >
      {isOpen ? data : null}
    </div>
  );
};
