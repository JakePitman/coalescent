import classnames from "classnames";
import { motion } from "framer-motion";
import Typist from "react-typist";

import { Sighting, Props as SightingProps } from "./Sighting";

const typistSettings = {
  stdTypingDelay: 10,
  avgTypingDelay: 10,
  cursor: { show: false },
};

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      // duration: 2,
    },
  },
};

type Props = {
  title: string;
  text: string;
  sightingsData: Omit<SightingProps, "isRTL">[];
  isRTL?: boolean;
};

export const InterestsGroup = ({
  title,
  text,
  sightingsData,
  isRTL = false,
}: Props) => {
  return (
    <div className="w-full mb-8">
      <h2
        className={classnames(
          "w-full text-xl border-b-2 border-sky-800 mb-2 pb-2  text-sky-500",
          {
            "text-right": isRTL,
          }
        )}
      >
        <Typist {...typistSettings}>{title}</Typist>
      </h2>
      <div
        className={classnames("flex", {
          "flex-row-reverse": isRTL,
        })}
      >
        <p
          className={classnames("w-5/12 pr-2 text-sm", {
            "text-right pr-0 pl-2": isRTL,
          })}
        >
          <Typist {...typistSettings}>{text}</Typist>
        </p>

        <div
          className={classnames("flex justify-end w-7/12", {
            "flex-row-reverse": isRTL,
          })}
        >
          {sightingsData.map((sightingProps, i) => (
            <Sighting {...sightingProps} isRTL={isRTL} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
