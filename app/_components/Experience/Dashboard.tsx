"use client";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";

// onClick={(e) => {
//   e.stopPropagation();
//   handleClick();
// }}

type NavItemProps = {
  label: string;
  position: [number, number, number];
  handleClick: () => void;
  isActive: boolean;
};
const NavItem = ({ label, position, handleClick, isActive }: NavItemProps) => {
  const content = isActive ? `· ${label} ·` : label;
  return (
    <Text
      position={position}
      anchorX={"center"}
      anchorY={"middle"}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      {content}
    </Text>
  );
};

export const Dashboard = () => {
  const router = useRouter();
  const { page, setPage } = usePageContext();

  const handleClick = (path: PageNames) => {
    setPage(path);
    router.push(path);
  };

  return (
    <group rotation={[-0.7, 0, 0]} position={[0, -2.06, -1]} scale={0.23}>
      <NavItem
        label="Home"
        handleClick={() => handleClick("/")}
        position={[-3.35, 0, 0]}
        isActive={page === "/"}
      />
      <NavItem
        label="Jake"
        handleClick={() => handleClick("/jake")}
        position={[-3.35, -1.2, 0]}
        isActive={page === "/jake"}
      />
      <NavItem
        label="Interests"
        handleClick={() => handleClick("/interests")}
        position={[-3.35, -2.4, 0]}
        isActive={page === "/interests"}
      />
      <NavItem
        label="Projects"
        handleClick={() => handleClick("/projects")}
        position={[3.35, 0, 0]}
        isActive={page === "/projects"}
      />
      <NavItem
        label="Blog"
        handleClick={() => handleClick("/blog")}
        position={[3.35, -1.2, 0]}
        isActive={page === "/blog"}
      />
      <NavItem
        label="Contact"
        handleClick={() => handleClick("/contact")}
        position={[3.35, -2.4, 0]}
        isActive={page === "/contact"}
      />
    </group>
  );
};
