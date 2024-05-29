import { useState } from "react";
import { motion } from "framer-motion";

import {
  ExploringImages,
  DivingImages,
  DronesImages,
  GuitarImages,
} from "./imageData";
import { TextBlock } from "../TextBlock";
import { InterestsGroup } from "./InterestsGroup";

export const Collage = () => {
  const [textIsFinished, setTextIsFinished] = useState(false);

  return (
    <>
      <TextBlock onTypingDone={() => setTextIsFinished(true)}>
        {
          "Target's primary motivation is software engineering. However, he keeps himself healthy by engaging in a range of other pursuits in his down-time:"
        }
      </TextBlock>
      {textIsFinished && (
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, staggerDirection: -1 }}
        >
          <InterestsGroup
            title="Exploring"
            text="Target has a curious mind and itchy feet"
            imageData={ExploringImages}
          />
          <InterestsGroup
            title="Diving"
            text="Sighted in the oceans of Australia, New Zealand, and Thailand"
            imageData={DivingImages}
          />
          <InterestsGroup
            title="Drones"
            text={`He builds, repairs, races, and films with them`}
            imageData={DronesImages}
          />
          <InterestsGroup
            title="Guitar"
            text={`The Earthlings call it "Rock and Roll Baby"`}
            imageData={GuitarImages}
          />
        </motion.div>
      )}
    </>
  );
};
