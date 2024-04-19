import Link from "next/link";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";
import { useAnimationContext } from "@contexts/AnimationContext";

type Props = {
  href: PageNames;
  label: string;
};

export const NavButton = ({ href, label }: Props) => {
  const { page, setPage } = usePageContext();
  // write tw styles for a white border-bottom
  const activeStyles = "border-b-2 border-green-100";
  const isActive = page === href;
  const { animationName, setAnimationName } = useAnimationContext();

  const onClick = () => {
    alert("CLICKED");
    setAnimationName("Happy");
    setPage(href);
  };

  return (
    <Link
      className={`mx-8 text-green-100 text-center ${
        isActive ? activeStyles : ""
      }`}
      href={href}
      onClick={() => onClick()}
    >
      {label}
    </Link>
  );
};
