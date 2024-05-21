import { motion } from "framer-motion";
import classnames from "classnames";

const openingTime = 1;
type SubSquareVariantsProps = {
  x: number | string;
  y: number | string;
};
const subSquareVariants = ({
  x,
  y,
}: SubSquareVariantsProps): { opening: {}; closing: {} } => ({
  opening: {
    x,
    y,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: openingTime,
    },
  },
  closing: {
    x: 0,
    y: 0,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 0.3,
    },
  },
});

// How many percent less than 50.
// Used to calculate square size and 'opening' xy offset
const subSquareSizeReducer = 5;
const subSquareSize = `${50 - subSquareSizeReducer}%`;
// Ensures that squares always go to border of container
const offsetSize = `${50 + subSquareSizeReducer * 2}%`;

const baseClassnames =
  "absolute border-solid border-[1px] border-sky-500 top-0 bottom-0 right-0 left-0 m-auto";
const sizeStyles = {
  width: subSquareSize,
  height: subSquareSize,
};

export const LoadingSpinner = () => {
  return (
    <motion.div
      className="absolute w-full h-full"
      initial="opening"
      animate="closing"
      transition={{
        repeat: Infinity,
        duration: 2,
        staggerChildren: 0.1,
      }}
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
