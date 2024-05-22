import { useState } from "react";

import { InterestsGroup } from "./InterestsGroup";
import { TextBlock } from "../TextBlock";
import { motion } from "framer-motion";

export const InterestsData = () => {
  const [textIsFinished, setTextIsFinished] = useState(false);

  return (
    <div>
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
            sightingsData={[
              { imageURL: "/images/exploring/mountain.jpg" },
              { imageURL: "/images/exploring/taylors_mistake.jpeg" },
              { imageURL: "/images/exploring/brewster.jpeg" },
            ]}
          />
          <InterestsGroup
            title="Diving"
            text="Sighted in the oceans of Australia, New Zealand, and Thailand"
            sightingsData={[
              { imageURL: "/images/diving/GBR.jpeg" },
              { imageURL: "/images/diving/whale_shark.jpeg" },
              { imageURL: "/images/diving/thailand.jpeg" },
            ]}
          />
          <InterestsGroup
            title="Drones"
            text={`He builds, repairs, races, and films with them`}
            sightingsData={[
              { imageURL: "/images/drones/drone_repair.jpeg" },
              { imageURL: "/images/drones/drone.jpeg" },
              { imageURL: "/images/drones/fpv.jpeg" },
            ]}
          />
          <InterestsGroup
            title="Guitar"
            text={`The Earthlings call it "Rock and Roll Baby"`}
            sightingsData={[
              { imageURL: "/images/guitar/ibanez.png" },
              { imageURL: "/images/guitar/guitar.jpg" },
            ]}
          />
        </motion.div>
      )}
    </div>
  );
};
