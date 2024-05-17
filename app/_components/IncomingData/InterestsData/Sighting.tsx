import classnames from "classnames";
import Image from "next/image";

export type Props = { image: null; isRTL: boolean };

export const Sighting = ({ isRTL }: Props) => {
  return (
    <div
      className={classnames(
        "relative w-[30%] h-auto aspect-square ml-[3%] overflow-hidden",
        {
          "ml-0 mr-[3%]": isRTL,
        }
      )}
    >
      <Image
        src="/images/diving/GBR.jpeg"
        alt="diving"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
