import Typist from "react-typist";
import styles from "./TextBlock.module.css";

type Props = {
  children: React.ReactNode;
  onTypingDone?: () => void;
};

export const TextBlock = ({ children, onTypingDone }: Props) => (
  <Typist
    stdTypingDelay={0}
    avgTypingDelay={0}
    cursor={{ show: false }}
    className={styles.container}
    onTypingDone={onTypingDone}
  >
    {children}
  </Typist>
);
