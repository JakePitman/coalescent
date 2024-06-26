"use client";
import { useEffect, useState } from "react";
import { SanityDocument } from "next-sanity";
import { client } from "../../../../sanity/client";

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

  return (
    <div>
      {events.map((event) => {
        return <p key={event.title}>{event.title}</p>;
      })}
    </div>
  );
};
