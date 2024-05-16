import classnames from "classnames";

export type Props = { image: null; isRTL: boolean };

export const Sighting = ({ isRTL }: Props) => {
  return (
    <div
      className={classnames("w-[30%] h-auto aspect-square outline ml-[3%]", {
        "ml-0 mr-[3%]": isRTL,
      })}
    ></div>
  );
};
