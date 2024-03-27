"use client";
import Link from "next/link";
import { Html } from "@react-three/drei";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";
import { useRouter } from "next/navigation";

type NavItemProps = {
  label: string;
  handleClick: () => void;
};
const NavItem = ({ label, handleClick }: NavItemProps) => {
  return <button onClick={handleClick}>{label}</button>;
};

export const Dashboard = () => {
  const router = useRouter();
  const { page, setPage } = usePageContext();
  const handleClick = (path: PageNames) => {
    setPage(path);
    router.push(path);
  };
  return (
    <Html position={[0, -8, 0]} transform>
      <NavItem label="Home" handleClick={() => handleClick("/")} />
      <NavItem label="Jake" handleClick={() => handleClick("/jake")} />
      <NavItem
        label="Interests"
        handleClick={() => handleClick("/interests")}
      />
      <NavItem label="Projects" handleClick={() => handleClick("/projects")} />
      <NavItem label="Blog" handleClick={() => handleClick("/blog")} />
      <NavItem label="Contact" handleClick={() => handleClick("/contact")} />
    </Html>
  );
};
