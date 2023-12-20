export const pageNames = [
  "/",
  "/jake",
  "/interests",
  "/projects",
  "/skills",
  "/blog",
  "/contact",
] as const;

export type PageNames = (typeof pageNames)[number];
