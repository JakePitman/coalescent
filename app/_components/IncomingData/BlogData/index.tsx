"use client";
import { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { client } from "../../../../sanity/client";
import { useIntl } from "react-intl";
import { LOCALES } from "../../../i18n/constants";

import { BlogEntry } from "./BlogEntry";

const BLOGS_QUERY = `
*[
  _type == "blogEntry"
]{
  _createdAt,
  title,
  jpTitle,
  slug,
  description,
  jpDescription,
  tags,
  jpTags
}
`;

const fetchEvents = async () => {
  const res = await client.fetch<SanityDocument[]>(BLOGS_QUERY);
  return res;
};

export const BlogData = () => {
  const { locale } = useIntl();
  const [blogEntries, setBlogEntries] = useState<SanityDocument[]>([]);

  useEffect(() => {
    fetchEvents().then((res) => setBlogEntries(res));
  }, []);

  return (
    <div>
      {blogEntries.map((entry) => {
        let localisedData;
        switch (locale) {
          case LOCALES.ENGLISH:
            localisedData = {
              title: entry.title,
              description: entry.description,
              tags: entry.tags,
            };
            break;
          case LOCALES.JAPANESE:
            localisedData = {
              title: entry.jpTitle,
              description: entry.jpDescription,
              tags: entry.jpTags,
            };
            break;
          default:
            localisedData = {
              title: entry.title,
              description: entry.description,
              tags: entry.tags,
            };
        }
        return (
          <BlogEntry
            key={entry.title + entry.createdAt}
            createdAt={entry._createdAt}
            title={localisedData.title}
            slug={entry.slug}
            description={localisedData.description}
            tags={localisedData.tags}
          />
        );
      })}
    </div>
  );
};
