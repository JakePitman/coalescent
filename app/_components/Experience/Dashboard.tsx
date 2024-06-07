"use client";
import { useState, useEffect } from "react";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";

import { mobileBreakPoint } from "@sharedData/index";
import { useWindowDimensions } from "@/app/_utilities/hooks/useWindowDimensions";

type NavItemProps = {
  label: string;
  position: [number, number, number];
  handleClick: () => void;
  isActive: boolean;
};
const NavItem = ({ label, position, handleClick, isActive }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = isHovered ? "pointer" : "auto";
  }, [isHovered]);

  const content = isActive ? `· ${label} ·` : label;
  return (
    <Text
      color={isActive ? "white" : "#969696"}
      position={position}
      anchorX={"center"}
      anchorY={"middle"}
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      onPointerOver={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      {content}
    </Text>
  );
};

export const Dashboard = () => {
  const router = useRouter();
  const { page, setPage } = usePageContext();
  const { width } = useWindowDimensions();
  const isMobile = width <= mobileBreakPoint;

  const xOffset = isMobile ? 3 : 3.35;
  const yOffset = 1.2;

  const handleClick = (path: PageNames) => {
    setPage(path);
    router.push(path);
  };

  return (
    <group rotation={[-0.7, 0, 0]} position={[0, -2.06, -1]} scale={0.23}>
      <NavItem
        label="Home"
        handleClick={() => handleClick("/")}
        position={[-xOffset, 0, 0]}
        isActive={page === "/"}
      />
      <NavItem
        label="Jake"
        handleClick={() => handleClick("/jake")}
        position={[-xOffset, -yOffset, 0]}
        isActive={page === "/jake"}
      />
      <NavItem
        label="Interests"
        handleClick={() => handleClick("/interests")}
        position={[-xOffset, -yOffset * 2, 0]}
        isActive={page === "/interests"}
      />
      <NavItem
        label="Projects"
        handleClick={() => handleClick("/projects")}
        position={[xOffset, 0, 0]}
        isActive={page === "/projects"}
      />
      <NavItem
        label="Blog"
        handleClick={() => handleClick("/blog")}
        position={[xOffset, -yOffset, 0]}
        isActive={page === "/blog"}
      />
      <NavItem
        label="Contact"
        handleClick={() => handleClick("/contact")}
        position={[xOffset, -yOffset * 2, 0]}
        isActive={page === "/contact"}
      />
    </group>
  );
};
