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
        return (
          // TODO: Find a more elegant way to handle this
          <BlogEntry
            key={entry.title + entry.createdAt}
            createdAt={entry._createdAt}
            title={locale === LOCALES.JAPANESE ? entry.jpTitle : entry.title}
            slug={entry.slug}
            description={
              locale === LOCALES.JAPANESE
                ? entry.jpDescription
                : entry.description
            }
            tags={locale === LOCALES.JAPANESE ? entry.jpTags : entry.tags}
          />
        );
      })}
    </div>
  );
};
