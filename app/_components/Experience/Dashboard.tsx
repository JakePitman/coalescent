"use client";
import { useState, useEffect } from "react";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";
import { useRouter } from "next/navigation";
import { Text } from "@react-three/drei";
import { useIntl } from "react-intl";

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
      font="/fonts/NotoSansJP-VariableFont_wght.ttf"
      color={isActive ? "#09ff00" : "white"}
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
  const intl = useIntl();

  const xOffset = isMobile ? 3 : 3.35;
  const yOffset = isMobile ? 2.0 : 2.06;
  const ySpacing = 1.2;

  const handleClick = (path: PageNames) => {
    setPage(path);
    router.push(path);
  };

  return (
    <group rotation={[-0.7, 0, 0]} position={[0, -yOffset, -1]} scale={0.23}>
      <NavItem
        label={intl.formatMessage({
          id: "dashboardHome",
          defaultMessage: "Home :]",
        })}
        handleClick={() => handleClick("/")}
        position={[-xOffset, 0, 0]}
        isActive={page === "/"}
      />
      <NavItem
        label={intl.formatMessage({
          id: "dashboardJake",
          defaultMessage: "Jake",
        })}
        handleClick={() => handleClick("/jake")}
        position={[-xOffset, -ySpacing, 0]}
        isActive={page === "/jake"}
      />
      <NavItem
        label={intl.formatMessage({
          id: "dashboardInterests",
          defaultMessage: "Interests",
        })}
        handleClick={() => handleClick("/interests")}
        position={[-xOffset, -ySpacing * 2, 0]}
        isActive={page === "/interests"}
      />
      <NavItem
        label={intl.formatMessage({
          id: "dashboardProjects",
          defaultMessage: "Projects",
        })}
        handleClick={() => handleClick("/projects")}
        position={[xOffset, 0, 0]}
        isActive={page === "/projects"}
      />
      <NavItem
        label={intl.formatMessage({
          id: "dashboardBlog",
          defaultMessage: "Blog",
        })}
        handleClick={() => handleClick("/blog")}
        position={[xOffset, -ySpacing, 0]}
        isActive={page === "/blog"}
      />
      <NavItem
        label={intl.formatMessage({
          id: "dashboardContact",
          defaultMessage: "Contact",
        })}
        handleClick={() => handleClick("/contact")}
        position={[xOffset, -ySpacing * 2, 0]}
        isActive={page === "/contact"}
      />
    </group>
  );
};
