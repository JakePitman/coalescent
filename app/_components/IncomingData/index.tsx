import { usePageContext } from "@contexts/pageContext";
import { Space_Mono } from "next/font/google";
import classnames from "classnames";
import {
  JakeData,
  InterestsData,
  ProjectsData,
  BlogData,
  ContactData,
} from "./Data";
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

  if (!page) return null;

  return (
    <div
      className={classnames(
        "p-5 bg-sky-800/30 shadow-[0_0_15px_2px_#7Cbdbd_inset] border-2 border-sky-400 rounded-md text-sky-300 sm:w-[40vw] w-[90vw] h-[60vh] ",
        spaceMono.className
      )}
    >
      {getDataFromPage(page)}
    </div>
  );
};
