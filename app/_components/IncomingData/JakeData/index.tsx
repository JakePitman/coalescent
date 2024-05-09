import { TextBlock } from "../TextBlock";
import styles from "../Data.module.css";
import { Skills } from "./Skills";

export const JakeData = () => {
  return (
    <div>
      {/* 
      NOTE: Typist has a strange bug that prevents components extracted
      into variables from working. Defaulting to css extractions instead
    */}
      <TextBlock>
        <div className={styles.section}>
          <div>
            <h3 className={styles.key}>Name: </h3>
            <p className={styles.value}>Jake Pitman</p>
          </div>
          <div>
            <h3 className={styles.key}>Age: </h3>
            <p className={styles.value}>Unknown</p>
          </div>
          <div>
            <h3 className={styles.key}>Location: </h3>
            <p className={styles.value}>Earth</p>
          </div>
        </div>
      </TextBlock>

      <Skills />
    </div>
  );
};
