import classnames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // duration: 2,
    },
  },
};

export type Props = { imageURL: string; isRTL: boolean };

export const Sighting = ({ imageURL, isRTL }: Props) => {
  return (
    <motion.div
      variants={variants}
      className={classnames(
        "relative w-[30%] h-auto aspect-square ml-[3%] overflow-hidden",
        {
          "ml-0 mr-[3%]": isRTL,
        }
      )}
    >
      <Image src={imageURL} alt="diving" fill style={{ objectFit: "cover" }} />
    </motion.div>
  );
};
