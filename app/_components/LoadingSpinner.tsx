import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import classnames from "classnames";

const containerVariants = {
  closed: {
    transform: "rotate(0deg)",
  },
  opening: {
    transform: "rotate(0deg)",
    transition: {
      staggerChildren: 0.2,
    },
  },
  closing: {
    transform: "rotate(90deg)",
    transition: {
      delay: 0.1,
      delayChildren: 0.2,
    },
  },
};

type SubSquareVariantsProps = {
  x: number | string;
  y: number | string;
};
const subSquareVariants = ({ x, y }: SubSquareVariantsProps) => ({
  closed: {
    x: 0,
    y: 0,
  },
  opening: {
    x,
    y,
  },
  closing: {
    x: 0,
    y: 0,
  },
});

const baseClassnames =
  "absolute w-[45%] h-[45%] outline outline-sky-500 top-0 bottom-0 right-0 left-0 m-auto";
export const LoadingSpinner = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("closed");
      await controls.start("opening");
      await controls.start("closing");
      await controls.set("closed");
      sequence();
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      className="absolute w-full h-full"
      variants={containerVariants}
      animate={controls}
    >
      <motion.div
        className={classnames(baseClassnames)}
        variants={subSquareVariants({ x: "-60%", y: "-60%" })}
      />
      <motion.div
        className={classnames(baseClassnames)}
        variants={subSquareVariants({ x: "-60%", y: "60%" })}
      />
      <motion.div
        className={classnames(baseClassnames)}
        variants={subSquareVariants({ x: "60%", y: "60%" })}
      />
      <motion.div
        className={classnames(baseClassnames)}
        variants={subSquareVariants({ x: "60%", y: "-60%" })}
      />
    </motion.div>
  );
};
