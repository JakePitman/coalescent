"use client";
import { motion } from "framer-motion";
import { NavButton } from "./NavButton";
import {
  spaceshipMobileScalingFactor,
  mobileBreakPoint,
} from "@sharedData/index";
import styles from "./Dashboard.module.css";

const desktopSize = {
  width: 540,
  height: 210,
};
const mobileSize = {
  width: desktopSize.width * spaceshipMobileScalingFactor.x,
  height: desktopSize.height * spaceshipMobileScalingFactor.y,
};

export const Dashboard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.5 },
      }}
      style={{
        perspective: "500px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      className="z-20 absolute bottom-16 sm:bottom-6"
    >
      {/* Using a style tag here so I can use media query + variable interpolation */}
      {/* This keeps the scaling consistent with the spaceship's 3D dashboard*/}
      <style>
        {`
        .dashboardContent {
          transform: rotateX(26deg);
          width: ${desktopSize.width}px;
          height: ${desktopSize.height}px;
          @media (max-width: ${mobileBreakPoint}px) {
            width: ${mobileSize.width}px;
            height: ${mobileSize.height}px;
          }
        }
        `}
      </style>
      <div
        className={`bg-green-900/30 text-green-100 border border-green-100 dashboardContent`}
      >
        <ul className={`flex flex-col h-full justify-center`}>
          <NavButton href="/" label="Home" />
          <NavButton href="/jake" label="Jake" />
          <NavButton href="/interests" label="Interests" />
          <NavButton href="/projects" label="Projects" />
          <NavButton href="/blog" label="Blog" />
          <NavButton href="/contact" label="Contact" />
        </ul>
      </div>
    </motion.div>
  );
};
