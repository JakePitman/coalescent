export const pageNames = [
  "/",
  "/jake",
  "/interests",
  "/projects",
  "/contact",
] as const;

export type PageNames = (typeof pageNames)[number];
