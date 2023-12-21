export const pageNames = [
  "/",
  "/jake",
  "/interests",
  "/projects",
  "/blog",
  "/contact",
] as const;

export type PageNames = (typeof pageNames)[number];
