import Link from "next/link";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";

type Props = {
  href: PageNames;
  label: string;
};

export const NavButton = ({ href, label }: Props) => {
  const { page, setPage } = usePageContext();
  // write tw styles for a white border-bottom
  const activeStyles = "border-b-2 border-white";
  const isActive = page === href;
  return (
    <Link
      className={`mx-8 text-white text-center ${isActive && activeStyles}`}
      href={href}
      onClick={() => setPage(href)}
    >
      {label}
    </Link>
  );
};
