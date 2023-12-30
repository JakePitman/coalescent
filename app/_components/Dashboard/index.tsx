"use client";
import { motion } from "framer-motion";
import { NavButton } from "./NavButton";
import {
  spaceshipMobileScalingFactor,
  mobileBreakPoint,
} from "@sharedData/index";
import styles from "./Dashboard.module.css";

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
      className="z-20 absolute bottom-6"
    >
      <style>
        {`
        .dashboardContent {
          transform: rotateX(26deg) scale(1, 1);
          @media (max-width: ${mobileBreakPoint}px) {
            transform: rotateX(26deg) scale(${spaceshipMobileScalingFactor.x}, ${spaceshipMobileScalingFactor.y});
          }
        }
        `}
      </style>
      <div
        className={`bg-green-900/30 text-green-100 border border-green-100 w-[540px] h-[210px] dashboardContent`}
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
