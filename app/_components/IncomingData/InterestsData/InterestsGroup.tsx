import classnames from "classnames";
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
        className={classnames("flex ", {
          "flex-row-reverse": isRTL,
        })}
      >
        <p
          // Text hidden on mobile
          className={classnames("w-4/12 pr-2 text-xs hidden sm:block", {
            "text-right pr-0 pl-2": isRTL,
          })}
        >
          <Typist {...typistSettings}>{text}</Typist>
        </p>

        <div
          // Images full width on mobile
          className={classnames(
            "flex sm:justify-end sm:w-8/12 w-full justify-start h-min",
            {
              "flex-row-reverse": isRTL,
            }
          )}
        >
          {sightingsData.map((sightingProps, i) => (
            <Sighting {...sightingProps} isRTL={isRTL} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
