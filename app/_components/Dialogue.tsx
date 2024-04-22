import classnames from "classnames";
import { mobileBreakPoint } from "@sharedData/index";
import { useWindowDimensions } from "@/app/_utilities/hooks/useWindowDimensions";
import styles from "./dialogue.module.css";

type Props = {
  /*
   * The text that will be displayed in the dialogue box
   */
  text: string | null;
};
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const Dialogue = ({ text }: Props) => {
  const { width } = useWindowDimensions();
  const isMobile = width <= mobileBreakPoint;

  return (
    <div
      className={classnames(
        styles.container,
        "bg-blue-800 border-white border-2 p-4 rounded relative w-[50vw]",
        {
          [styles.containerClosed]: !text,
        }
      )}
    >
      <p className={classnames(spaceMono.className, styles.text, "text-white")}>
        {text}
      </p>
      <div
        className={classnames(styles.triangle, "absolute bottom-1 right-1")}
      />
    </div>
  );
};
