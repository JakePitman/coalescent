"use client";
import Link from "next/link";
import { Html } from "@react-three/drei";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";
import { useRouter } from "next/navigation";

type NavItemProps = {
  label: string;
  handleClick: () => void;
  isActive: boolean;
};
const NavItem = ({ label, handleClick, isActive }: NavItemProps) => {
  const activeStyles = "border-b-white";
  return (
    <button
      className={
        "border-b-2 border-b-transparent text-white" +
        ` ${isActive ? activeStyles : ""}`
      }
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      {label}
    </button>
  );
};

const positions = {
  lowDPR: [0, -2.29, -0.86] as const,
  highDPR: [0, -1.91, -0.86] as const,
};
export const Dashboard = () => {
  const router = useRouter();
  const { page, setPage } = usePageContext();

  const handleClick = (path: PageNames) => {
    setPage(path);
    router.push(path);
  };

  return (
    <Html
      transform
      position={
        window?.devicePixelRatio >= 3 ? positions.highDPR : positions.lowDPR
      }
      rotation={[-0.6, 0, 0]}
      as="div"
      className="flex w-72 justify-around"
      distanceFactor={4}
    >
      <div className="flex flex-col">
        <NavItem
          label="Home"
          handleClick={() => handleClick("/")}
          isActive={page === "/"}
        />
        <NavItem
          label="Jake"
          handleClick={() => handleClick("/jake")}
          isActive={page === "/jake"}
        />
        <NavItem
          label="Interests"
          handleClick={() => handleClick("/interests")}
          isActive={page === "/interests"}
        />
      </div>
      <div className="flex flex-col">
        <NavItem
          label="Projects"
          handleClick={() => handleClick("/projects")}
          isActive={page === "/projects"}
        />
        <NavItem
          label="Blog"
          handleClick={() => handleClick("/blog")}
          isActive={page === "/blog"}
        />
        <NavItem
          label="Contact"
          handleClick={() => handleClick("/contact")}
          isActive={page === "/contact"}
        />
      </div>
    </Html>
  );
};
