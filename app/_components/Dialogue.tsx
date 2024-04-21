import styles from "./dialogue.module.css";

type Props = {
  /*
   * The text that will be displayed in the dialogue box
   */
  text: string;
};
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const Dialogue = ({ text }: Props) => {
  return (
    <div
      className={
        styles.gradient +
        " " +
        "bg-blue-800 border-white border-2 p-4 rounded relative"
      }
    >
      <p className={spaceMono.className + " " + "text-white"}>{text}</p>
      <div className={styles.triangle + " " + "absolute bottom-1 right-1"} />
    </div>
  );
};
