import Link from "next/link";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";

type Props = {
  href: PageNames;
  label: string;
};

export const NavButton = ({ href, label }: Props) => {
  const { page, setPage } = usePageContext();
  const activeStyles = "border-b-2 border-green-100";
  const isActive = page === href;
  return (
    <Link
      className={`w-max mx-8 text-green-100 text-center ${
        isActive ? activeStyles : ""
      }`}
      href={href}
      onClick={() => setPage(href)}
    >
      {label}
    </Link>
  );
};
