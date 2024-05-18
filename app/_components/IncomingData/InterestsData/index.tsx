import { useState } from "react";

import { InterestsGroup } from "./InterestsGroup";
import { TextBlock } from "../TextBlock";
import { motion } from "framer-motion";

export const InterestsData = () => {
  const [textIsFinished, setTextIsFinished] = useState(false);

  return (
    <div>
      <TextBlock onTypingDone={() => setTextIsFinished(true)}>
        Target has been sighted engaging in a range of pursuits:
      </TextBlock>

      {textIsFinished && (
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, staggerDirection: -1 }}
        >
          <InterestsGroup
            title="Software Engineering"
            text="He's always building something..."
            sightingsData={[{ imageURL: "/images/diving/GBR.jpeg" }]}
            isRTL
          />
          <InterestsGroup
            title="Diving"
            text="Sighted in the oceans of Australia, New Zealand, and Thailand"
            sightingsData={[
              { imageURL: "/images/diving/GBR.jpeg" },
              { imageURL: "/images/diving/whale_shark.jpg" },
              { imageURL: "/images/diving/thailand.jpeg" },
            ]}
          />
          <InterestsGroup
            title="Drones"
            text={`He builds, repairs and races them. He also uses them to make videos of beautiful scenery`}
            sightingsData={[
              { imageURL: "/images/drones/drone.jpeg" },
              { imageURL: "/images/drones/taylors_mistake.jpeg" },
            ]}
            isRTL
          />
          <InterestsGroup
            title="Guitar"
            text={`The Earthlings call it "Rock and Roll Baby"`}
            sightingsData={[
              { imageURL: "/images/guitar/guitar.jpg" },
              { imageURL: "/images/drones/taylors_mistake.jpeg" },
            ]}
          />
        </motion.div>
      )}
    </div>
  );
};
