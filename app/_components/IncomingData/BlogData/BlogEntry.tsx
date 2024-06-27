import { useState } from "react";
import { FormattedDate } from "react-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Bebas_Neue } from "next/font/google";
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
  slug,
  description,
  tags,
}: BlogEntryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#00092A] rounded mb-3 last:mb-0 py-2 px-4">
      <div className="w-full flex items-start mb-2">
        <div className="flex items-center flex-grow overflow-hidden">
          <h3
            className={classnames(
              "text-3xl",
              bebasNeue.className,
              { [styles.title]: !isExpanded },
              { [styles.titleExpanded]: isExpanded }
            )}
          >
            {title}
          </h3>
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
        <p className="border-l-[6px] border-slate-400 pl-3 text-slate-400">
          {description}
        </p>
      )}

      <div className="flex justify-between items-center">
        <div
          className={classnames("flex flex-grow", {
            [styles.tagContainer]: true,
            [styles.tagContainerClosed]: !isExpanded,
            [styles.tagContainerExpanded]: isExpanded,
          })}
        >
          {tags.map(({ value }, i) => (
            <p
              className={classnames(
                "bg-sky-700 rounded py-1 px-2 text-[#00092A] mr-2",
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
        <em className="text-slate-400 ml-3">
          <FormattedDate value={createdAt} />
        </em>
      </div>
    </div>
  );
};
