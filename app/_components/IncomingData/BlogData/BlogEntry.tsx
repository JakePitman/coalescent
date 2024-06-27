import { useState } from "react";
import { FormattedDate } from "react-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { Bebas_Neue } from "next/font/google";
import { useIntl } from "react-intl";
import classnames from "classnames";

import styles from "./blogEntry.module.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

type BlogEntryProps = {
  createdAt: string;
  title: string;
  slug: string;
  description: string;
  tags: { value: string }[];
};
export const BlogEntry = ({
  createdAt,
  title,
  slug, // TODO: Use this to link to blog site when completed
  description,
  tags,
}: BlogEntryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const intl = useIntl();

  const alertMessage = intl.formatMessage({
    id: "blogSiteComingSoon",
    defaultMessage:
      "Jake is currently working on a blog site. Once it's complete, you can link to articles from here. Please stay tuned!",
  });

  return (
    <div className="bg-[#00092A] rounded mb-3 last:mb-0 py-2 px-4">
      <div className="w-full flex items-start mb-2">
        <div className="flex items-center flex-grow overflow-hidden">
          <button
            className="relative overflow-hidden pr-5 text-left"
            onClick={() => alert(alertMessage)}
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
          </button>
          <hr className="flex-grow mx-3 border-slate-400" />
        </div>

        <div className="h-full mt-2">
          {isExpanded ? (
            <button onClick={() => setIsExpanded(false)}>
              <FaChevronUp />
            </button>
          ) : (
            <button onClick={() => setIsExpanded(true)}>
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
        <em
          className={classnames(
            "sm:text-sm text-xs text-slate-400 ml-3 text-end",
            {
              "w-full mt-3": isExpanded,
            }
          )}
        >
          <FormattedDate value={createdAt} />
        </em>
      </div>
    </div>
  );
};
