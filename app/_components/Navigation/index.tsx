"use client";

import { NavButton } from "./NavButton";
import { usePage } from "@hooks/usePage";

type Props = {
  className?: string;
};
export const Navigation = ({ className }: Props) => {
  return (
    <ul className={`${className} flex flex-col sm:flex-row`}>
      <NavButton href="/" label="Home" />
      <NavButton href="/jake" label="Jake" />
      <NavButton href="/interests" label="Interests" />
      <NavButton href="/projects" label="Projects" />
      <NavButton href="/blog" label="Blog" />
      <NavButton href="/contact" label="Contact" />
    </ul>
  );
};
