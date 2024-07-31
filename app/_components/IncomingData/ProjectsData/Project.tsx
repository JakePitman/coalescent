import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { MdOutlineOpenInNew } from "react-icons/md";
// import { FaGithubSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Bebas_Neue } from "next/font/google";
import classnames from "classnames";
import Image from "next/image";

import styles from "./project.module.css";
import { urlFor } from "../../../../sanity/client";

type LinkProps = {
  href: string | undefined;
  children: React.ReactNode;
};
const Link = ({ href, children }: LinkProps) => {
  return !!href ? (
    <a className="text-sky-300 mr-1 last:mr-0" href={href} target="_blank">
      {children}
    </a>
  ) : (
    <div className="text-slate-700 mr-1 last:mr-0">{children}</div>
  );
};

type TitleProps = {
  label: string;
  liveLink: string | undefined;
  isExpanded: boolean;
};
const Title = ({ label, liveLink, isExpanded }: TitleProps) => {
  const Wrapper = !!liveLink
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          className={classnames(
            "relative overflow-hidden pr-5 text-left",
            "focus-styles-inset"
          )}
          href={liveLink}
          target="_blank"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <h3
          className={classnames(
            "relative overflow-hidden pr-5 text-left",
            "focus-styles-inset"
          )}
        >
          {children}
        </h3>
      );

  return (
    <Wrapper>
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
        {label}
      </h3>
      {!!liveLink && (
        <MdOpenInNew className="absolute top-[-2px] right-0 text-slate-400" />
      )}
    </Wrapper>
  );
};

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
  const [isImageLoaded, setImageIsLoaded] = useState(false);

  return (
    <div className="bg-[#00092A] rounded mb-3 last:mb-0 py-2 px-4">
      <div className="w-full flex items-start sm:mb-2">
        <div className="flex items-center flex-grow overflow-hidden">
          <Title label={title} liveLink={links.live} isExpanded={isExpanded} />
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
        <div className="relative min-h-[200px]">
          <p className="sm:text-base text-sm sm:my-3 mb-7 border-l-[6px] border-slate-400 pl-3 pr-2 text-slate-400 relative z-20 bg-gradient-to-r from-darkBlue to-darkBlue/70 sm:w-max sm:max-w-[80%] top-3">
            {description}
          </p>

          <div className="sm:absolute relative h-[200px] max-w-full aspect-video right-0 top-0 mb-1">
            <div className="absolute h-full w-full bg-darkBlue/50 z-10" />
            <Image
              src={urlFor(image).url()}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              onLoad={() => setImageIsLoaded(true)}
              className={classnames("transition-all", {
                "opacity-0": !isImageLoaded,
                "opacity-100": isImageLoaded,
              })}
            />
          </div>
        </div>
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
                  "sm:text-base text-sm bg-sky-700 rounded py-1 px-2 text-darkBlue mr-2",
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
          <div className="ml-3 flex items-center">
            <Link href={links.live}>
              <MdOutlineOpenInNew size={30} />
            </Link>
            <Link href={links.github}>
              <FaSquareGithub size={27} />
            </Link>
          </div>
        </em>
      </div>
    </div>
  );
};
