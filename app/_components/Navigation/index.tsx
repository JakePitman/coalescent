"use client";

import { NavButton } from "./NavButton";
import { usePage } from "@hooks/usePage";

type Props = {
  className?: string;
};
export const Navigation = ({ className }: Props) => {
  return (
    <ul className={className}>
      <NavButton href="/" label="Home" />
      <NavButton href="/jake" label="Jake" />
      <NavButton href="/interests" label="Interests" />
      <NavButton href="/projects" label="Projects" />
      <NavButton href="/contact" label="Contact" />
    </ul>
  );
};
