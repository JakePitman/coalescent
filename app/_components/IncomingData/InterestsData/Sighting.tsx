import classnames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";
import { LoadingSpinner } from "@components/LoadingSpinner";

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
      {/* <Image src={imageURL} alt="diving" fill style={{ objectFit: "cover" }} /> */}
      <div className="h-full border-solid border-green-300 border-2 relative">
        <div className="absolute w-4/5 h-4/5 left-0 right-0 top-0 bottom-0 m-auto">
          <LoadingSpinner />
        </div>
      </div>
    </motion.div>
  );
};
