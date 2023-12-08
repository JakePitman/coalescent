import Link from "next/link";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";

type Props = {
  href: PageNames;
  label: string;
};

export const NavButton = ({ href, label }: Props) => {
  const { setPage } = usePageContext();
  return (
    <Link className="px-8" href={href} onClick={() => setPage(href)}>
      {label}
    </Link>
  );
};
