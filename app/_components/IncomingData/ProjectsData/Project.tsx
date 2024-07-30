import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
// import { FaGithubSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Bebas_Neue } from "next/font/google";
import classnames from "classnames";

import styles from "./project.module.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export type ProjectData = {
  title: string;
  jpTitle: string;
  description: string;
  jpDescription: string;
  tags: { value: string }[];
  jpTags: { value: string }[];
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  links: {
    github?: string;
    live?: string;
  };
};

type Props = Omit<ProjectData, "jpTitle" | "jpDescription" | "jpTags">;
export const Project = ({ title, description, tags, image, links }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#00092A] rounded mb-3 last:mb-0 py-2 px-4">
      <div className="w-full flex items-start mb-2">
        <div className="flex items-center flex-grow overflow-hidden">
          <a
            className={classnames(
              "relative overflow-hidden pr-5 text-left",
              "focus-styles-inset"
            )}
            href={links.live}
            target="_blank"
          >
            <h3
              className={classnames(
                "sm:text-3xl text-xl relative",
                bebasNeue.className,
                {
                  [styles.title]: !isExpanded,
                  [styles.titleExpanded]: isExpanded,
                }
              )}
            >
              {title}
            </h3>
            <MdOpenInNew className="absolute top-[-2px] right-0 text-slate-400" />
          </a>
          <hr className="flex-grow mx-3 border-slate-600" />
        </div>

        <div className="h-full mt-2">
          {isExpanded ? (
            <button
              className="focus-styles"
              onClick={() => setIsExpanded(false)}
            >
              <FaChevronUp />
            </button>
          ) : (
            <button
              className="focus-styles"
              onClick={() => setIsExpanded(true)}
            >
              <FaChevronDown />
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <p className="sm:text-base text-sm my-3 border-l-[6px] border-slate-400 pl-3 text-slate-400">
          {description}
        </p>
      )}

      <div
        className={classnames("flex justify-between items-center", {
          "flex-wrap": isExpanded,
        })}
      >
        <div
          className={classnames(
            "relative overflow-scroll w-full",
            styles.tagContainer
          )}
        >
          {!isExpanded && (
            <div
              className={classnames(
                "absolute h-full right-0 w-[10px]",
                styles.tagContainerFadeBar
              )}
            />
          )}
          <div
            className={classnames("flex flex-grow", styles.tagContainer, {
              "overflow-scroll": !isExpanded,
              "flex-wrap": isExpanded,
            })}
          >
            {tags.map(({ value }, i) => (
              <p
                className={classnames(
                  "sm:text-base text-sm bg-sky-700 rounded py-1 px-2 text-[#00092A] mr-2",
                  styles.tag,
                  {
                    "mt-3": isExpanded,
                  }
                )}
                key={value + i}
              >
                {value}
              </p>
            ))}
          </div>
        </div>
        <em
          className={classnames(
            "sm:text-sm text-xs text-slate-400 text-end flex justify-end items-center",
            {
              "w-full mt-3": isExpanded,
            }
          )}
        >
          <hr className="flex-grow border-slate-600" />
          <div className="ml-3  text-sky-300 flex items-center">
            <MdOutlineOpenInNew size={30} />
            <FaSquareGithub size={27} />
          </div>
        </em>
      </div>
    </div>
  );
};
