import styles from "./dialogue.module.css";

type Props = {
  /*
   * The text that will be displayed in the dialogue box
   */
  text: string;
};

export const Dialogue = ({ text }: Props) => {
  return (
    <div
      className={
        styles.gradient +
        " " +
        "bg-blue-800 border-white border-2 p-4 rounded relative"
      }
    >
      <p className="text-white">{text}</p>
      <div className={styles.triangle + " " + "absolute bottom-1 right-1"} />
    </div>
  );
};
