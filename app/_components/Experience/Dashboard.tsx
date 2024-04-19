"use client";
import Link from "next/link";
import { Html } from "@react-three/drei";
import { usePageContext } from "@contexts/pageContext";
import { PageNames } from "@customTypes/pageNames";
import { useRouter } from "next/navigation";
import { useAnimationContext } from "@contexts/AnimationContext";

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
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export const Dashboard = () => {
  const { setAnimationName } = useAnimationContext();
  const router = useRouter();
  const { page, setPage } = usePageContext();

  // This method of changing animations is temporary, to test in prod.
  // Replace random animation switching on page change, with switching
  // according to dialogue. Each dialogue entry will have an animation
  // attached to it.
  const animationNames = [
    "Sleeping",
    "Idle",
    "Typing",
    "Explaining",
    "Asserting",
    "Happy",
    "Laughing",
    "IdleOutside",
    "LookingOutside",
    "ShockedOutside",
    "ReadingScreen",
    "PonderingScreen",
    "ShockedScreen",
  ] as const;
  type AnimationName = (typeof animationNames)[number]; // Remove
  const handleClick = (path: PageNames) => {
    // Remove
    const randomAnimation: AnimationName =
      animationNames[Math.floor(Math.random() * animationNames.length)];
    setAnimationName(randomAnimation);

    setPage(path);
    router.push(path);
  };

  return (
    <Html
      transform
      position={[0, -2.29, -0.86]}
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
