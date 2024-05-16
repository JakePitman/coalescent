import classnames from "classnames";

import { Sighting, Props as SightingProps } from "./Sighting";

type Props = {
  title: string;
  text: string;
  sightingsData: Omit<SightingProps, "isRTL">[];
  isRTL?: boolean;
  isReadyToRender: boolean;
};

export const InterestsGroup = ({
  title,
  text,
  sightingsData,
  isRTL = false,
  isReadyToRender,
}: Props) => {
  return (
    <div className="w-full mb-4">
      <h2
        className={classnames(
          "w-full text-xl border-b-2 border-sky-800 mb-2 pb-2  text-sky-500",
          {
            "text-right": isRTL,
          }
        )}
      >
        {title}
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
          {text}
        </p>
        <div
          className={classnames("flex justify-end w-7/12 bg-sky-200/30", {
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
