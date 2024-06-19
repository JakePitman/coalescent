import { useState } from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";

import {
  EXPLORING_IMAGES,
  DIVING_IMAGES,
  DRONES_IMAGES,
  GUITAR_IMAGES,
} from "./imageData";
import { InterestsGroup } from "./InterestsGroup";

export const Collage = () => {
  const [textIsFinished, setTextIsFinished] = useState(true);

  return (
    <>
      <p className="mb-4">
        <FormattedMessage
          id="interestsDataMainBody"
          defaultMessage="Target's primary motivation is software engineering. However, he keeps himself healthy by engaging in a range of other pursuits in his down-time:"
        />
      </p>
      {textIsFinished && (
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, staggerDirection: 1 }}
        >
          <InterestsGroup
            titleId="interestsDataExploringTitle"
            titleDefaultMessage="Exploring"
            textId="interestsDataExploringText"
            textDefaultMessage="Target has a curious mind and itchy feet"
            imageData={EXPLORING_IMAGES}
          />
          <InterestsGroup
            titleId="interestsDataDivingTitle"
            titleDefaultMessage="Diving"
            textId="interestsDataDivingText"
            textDefaultMessage="Sighted in the oceans of Australia, New Zealand, and Thailand"
            imageData={DIVING_IMAGES}
          />
          <InterestsGroup
            titleId="interestsDataDronesTitle"
            titleDefaultMessage="Drones"
            textId="interestsDataDronesText"
            textDefaultMessage="He builds, repairs, races, and films with them"
            imageData={DRONES_IMAGES}
          />
          <InterestsGroup
            titleId="interestsDataGuitarTitle"
            titleDefaultMessage="Guitar"
            textId="interestsDataGuitarText"
            textDefaultMessage="The Earthlings call it 'Rock and Roll Baby'"
            imageData={GUITAR_IMAGES}
          />
        </motion.div>
      )}
    </>
  );
};
