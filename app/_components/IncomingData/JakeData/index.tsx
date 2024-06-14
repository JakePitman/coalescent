import { useState } from "react";
import styles from "../Data.module.css";
import { TechStack } from "./TechStack";
import { FormattedMessage } from "react-intl";

export const JakeData = () => {
  const [textIsFinished, setTextIsFinished] = useState(true);

  return (
    <div>
      <div className={styles.section}>
        <div>
          <h3 className={styles.key}>
            <FormattedMessage
              id={"jakeDataNameKey"}
              defaultMessage={"Name: "}
            />
          </h3>
          <p className={styles.value}>
            {" "}
            <FormattedMessage
              id={"jakeDataNameValue"}
              defaultMessage={"Jake Pitman"}
            />
          </p>
        </div>
        <div>
          <h3 className={styles.key}>
            <FormattedMessage id={"jakeDataAgeKey"} defaultMessage={"Age: "} />
          </h3>
          <p className={styles.value}>
            {" "}
            <FormattedMessage
              id={"jakeDataAgeValue"}
              defaultMessage={"Unknown"}
            />
          </p>
        </div>
        <div>
          <h3 className={styles.key}>
            <FormattedMessage
              id={"jakeDataLastSightedKey"}
              defaultMessage={"Last sighted:"}
            />
          </h3>
          <p className={styles.value}>
            {" "}
            <FormattedMessage
              id={"jakeDataLastSightedValue"}
              defaultMessage={"Japan, Earth"}
            />
          </p>
        </div>
        <div>
          <h3 className={styles.key}>
            <FormattedMessage
              id={"jakeDataRolesPerformedKey"}
              defaultMessage={"Roles performed:"}
            />
          </h3>
          <p>
            ·
            <FormattedMessage
              id={"jakeDataRolesPerformedTeacher"}
              defaultMessage={"Teacher"}
            />
          </p>
          <p>
            ·
            <FormattedMessage
              id={"jakeDataRolesPerformedToolingEngineer"}
              defaultMessage={"Tooling Engineer"}
            />
          </p>
          <p>
            ·
            <FormattedMessage
              id={"jakeDataRolesPerformedFullStackEngineer"}
              defaultMessage={"Full-stack Engineer"}
            />
          </p>
          <p>
            ·
            <FormattedMessage
              id={"jakeDataRolesPerformedFrontEndEngineer"}
              defaultMessage={"Front-end Engineer"}
            />
          </p>
          <p>
            ·
            <FormattedMessage
              id={"jakeDataRolesPerformedDesignSystemsEngineer"}
              defaultMessage={"Design-systems Engineer"}
            />
          </p>
        </div>
      </div>

      <TechStack readyToRender={textIsFinished} />
    </div>
  );
};
