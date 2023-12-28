"use client";
import { motion } from "framer-motion";

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
      <div
        className="bg-green-900/20 text-green-100 border border-green-100 w-[520px] h-[210px]"
        style={{ transform: "rotateX(26deg)" }}
      >
        Dashboard
      </div>
    </motion.div>
  );
};
