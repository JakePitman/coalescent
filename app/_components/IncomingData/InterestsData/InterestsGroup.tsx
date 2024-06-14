import classnames from "classnames";
import Typist from "react-typist";
import { FormattedMessage } from "react-intl";

import { Sighting } from "./Sighting";
import { ImageData } from "./imageData";

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
  titleId: string;
  titleDefaultMessage: string;
  textId: string;
  textDefaultMessage: string;
  imageData: ImageData[];
  isRTL?: boolean;
};

export const InterestsGroup = ({
  titleId,
  titleDefaultMessage,
  textId,
  textDefaultMessage,
  imageData,
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
        <FormattedMessage id={titleId} defaultMessage={titleDefaultMessage} />
      </h2>
      <div
        className={classnames("flex ", {
          "flex-row-reverse": isRTL,
        })}
      >
        <div
          // Text hidden on mobile
          className={classnames("w-4/12 pr-2 text-xs hidden sm:block", {
            "text-right pr-0 pl-2": isRTL,
          })}
        >
          <FormattedMessage id={textId} defaultMessage={textDefaultMessage} />
        </div>

        <div
          // Images full width on mobile
          className={classnames(
            "flex sm:justify-end sm:w-8/12 w-full justify-start h-min",
            {
              "flex-row-reverse": isRTL,
            }
          )}
        >
          {imageData.map(({ imageURL, alt }, i) => (
            <Sighting imageURL={imageURL} alt={alt} isRTL={isRTL} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
