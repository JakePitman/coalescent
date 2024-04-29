import { usePageContext } from "@contexts/pageContext";
import {
  JakeData,
  InterestsData,
  ProjectsData,
  BlogData,
  ContactData,
} from "./Data";

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

  return <div>{getDataFromPage(page)}</div>;
};
