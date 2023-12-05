import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export const NavButton = ({ href, label }: Props) => {
  return (
    <Link className="px-8" href={href}>
      {label}
    </Link>
  );
};
