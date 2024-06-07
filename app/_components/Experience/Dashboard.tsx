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
  // handleClick: () => void;
  // isActive: boolean;
};
const NavItem = ({ label, position }: NavItemProps) => {
  return (
    <Text position={position} anchorX={"center"} anchorY={"middle"}>
      {label}
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
      <NavItem label="Home" position={[-3.35, 0, 0]} />
      <NavItem label="Jake" position={[-3.35, -1.2, 0]} />
      <NavItem label="Interests" position={[-3.35, -2.4, 0]} />
      <NavItem label="Projects" position={[3.35, 0, 0]} />
      <NavItem label="Blog" position={[3.35, -1.2, 0]} />
      <NavItem label="Contact" position={[3.35, -2.4, 0]} />
    </group>
  );
};
