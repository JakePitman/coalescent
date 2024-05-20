import { useEffect, useRef } from "react";
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

// How many percent less than 50.
// Used to calculate square size and 'opening' xy offset
const subSquareSizeReducer = 5;
const subSquareSize = `${50 - subSquareSizeReducer}%`;
// Ensures that squares always go to border of container
const offsetSize = `${50 + subSquareSizeReducer * 2}%`;

const baseClassnames =
  "absolute outline outline-sky-500 top-0 bottom-0 right-0 left-0 m-auto";
const sizeStyles = {
  width: subSquareSize,
  height: subSquareSize,
};

export const LoadingSpinner = () => {
  const controls = useAnimationControls();
  const isMounted = useRef(true);

  useEffect(() => {
    // TODO: Figure out how to do this without recursion
    // (using repeat: Infitinity, most likely)
    const sequence = async () => {
      if (!isMounted.current) return;
      if (isMounted.current) await controls.start("closed");
      if (isMounted.current) await controls.start("opening");
      if (isMounted.current) await controls.start("closing");
      if (isMounted.current) await controls.set("closed");
      sequence();
    };

    sequence();

    return () => {
      isMounted.current = false;
    };
  }, [controls]);

  return (
    <motion.div
      className="absolute w-full h-full"
      variants={containerVariants}
      animate={controls}
    >
      <motion.div
        className={classnames(baseClassnames)}
        style={sizeStyles}
        variants={subSquareVariants({
          x: `-${offsetSize}`,
          y: `-${offsetSize}`,
        })}
      />
      <motion.div
        className={classnames(baseClassnames)}
        style={sizeStyles}
        variants={subSquareVariants({ x: `-${offsetSize}`, y: offsetSize })}
      />
      <motion.div
        className={classnames(baseClassnames)}
        style={sizeStyles}
        variants={subSquareVariants({ x: offsetSize, y: offsetSize })}
      />
      <motion.div
        className={classnames(baseClassnames)}
        style={sizeStyles}
        variants={subSquareVariants({ x: offsetSize, y: `-${offsetSize}` })}
      />
    </motion.div>
  );
};
