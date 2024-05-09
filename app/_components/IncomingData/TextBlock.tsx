import Typist from "react-typist";
import styles from "./TextBlock.module.css";

type Props = {
  children: React.ReactNode;
};

export const TextBlock = ({ children }: Props) => (
  <Typist
    stdTypingDelay={0}
    avgTypingDelay={15}
    cursor={{ show: false }}
    className={styles.container}
  >
    {children}
  </Typist>
);
