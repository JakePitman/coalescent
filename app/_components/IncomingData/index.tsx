import { useState, useEffect } from "react";
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

export const IncomingData = () => {
  const { page } = usePageContext();
  const { dialogue } = useDialogueContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!dialogue?.text) {
      setIsOpen(true);
    }
    if (!!dialogue?.text) {
      setIsOpen(false);
    }
  }, [dialogue?.text]);

  if (!page) return null;

  return (
    <div
      className={classnames(
        "p-5 bg-sky-800/30 shadow-[0_0_15px_2px_#7Cbdbd_inset] border-2 border-sky-400 rounded-md text-sky-300 sm:w-[40vw] w-[90vw] h-[60vh] overflow-scroll",
        spaceMono.className,
        styles.container,
        { [styles.containerClosed]: !isOpen }
      )}
    >
      {getDataFromPage(page)}
    </div>
  );
};
