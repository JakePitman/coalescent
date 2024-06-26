"use client";
import { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { client } from "../../../../sanity/client";

import { BlogEntry } from "./BlogEntry";

const EVENTS_QUERY = `
*[
  _type == "blogEntry"
]{
  _createdAt,
  title,
  slug,
  description,
  tags,
  titleImage,
  mainContent,
}
`;

const fetchEvents = async () => {
  const res = await client.fetch<SanityDocument[]>(EVENTS_QUERY);
  return res;
};

export const BlogData = () => {
  const [events, setEvents] = useState<SanityDocument[]>([]);

  useEffect(() => {
    fetchEvents().then((res) => setEvents(res));
  }, []);

  console.log(events);

  return (
    <div>
      {events.map((event) => {
        return (
          <BlogEntry
            key={event.title + event.createdAt}
            createdAt={event._createdAt}
            title={event.title}
            slug={event.slug}
            description={event.description}
            tags={event.tags}
          />
        );
      })}
    </div>
  );
};
