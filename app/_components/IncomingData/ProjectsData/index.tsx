import { useEffect, useState } from "react";
import { client } from "../../../../sanity/client";
import { useIntl } from "react-intl";
import { LOCALES } from "../../../i18n/constants";
import { ProjectData, Project } from "./Project";

const PROJECTS_QUERY = `
*[
  _type == "project"
]{
  title,
  jpTitle,
  description,
  jpDescription,
  tags,
  jpTags,
  image,
  links
} | order(_createdAt desc)
`;

const fetchProjects = async () => {
  const res = await client.fetch<ProjectData[]>(PROJECTS_QUERY);
  return res;
};

export const ProjectsData = () => {
  const { locale } = useIntl();
  const [blogEntries, setBlogEntries] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetchProjects().then((res) => setBlogEntries(res));
  }, []);

  return (
    <div>
      {blogEntries.map((project, i) => {
        let localisedData;
        switch (locale) {
          case LOCALES.ENGLISH:
            localisedData = {
              title: project.title,
              description: project.description,
              tags: project.tags,
            };
            break;
          case LOCALES.JAPANESE:
            localisedData = {
              title: project.jpTitle,
              description: project.jpDescription,
              tags: project.jpTags,
            };
            break;
          default:
            localisedData = {
              title: project.title,
              description: project.description,
              tags: project.tags,
            };
        }

        return (
          <Project
            key={i}
            title={localisedData.title}
            description={localisedData.description}
            tags={localisedData.tags}
            image={project.image}
            links={project.links}
          />
        );
      })}
    </div>
  );
};
