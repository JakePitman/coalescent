import { useState } from "react";

import { InterestsGroup } from "./InterestsGroup";
import { TextBlock } from "../TextBlock";

export const InterestsData = () => {
  const [textIsFinished, setTextIsFinished] = useState(false);

  return (
    <div>
      <TextBlock onTypingDone={() => setTextIsFinished(true)}>
        Target has been sighted engaging in a range of pursuits:
      </TextBlock>
      <InterestsGroup
        title="Software Engineering"
        text="He's always building something..."
        sightingsData={[{ imageURL: "/images/diving/GBR.jpeg" }]}
        isRTL
        isReadyToRender={textIsFinished}
      />
      <InterestsGroup
        title="Diving"
        text="Sighted in the oceans of Australia, New Zealand, and Thailand"
        sightingsData={[
          { imageURL: "/images/diving/GBR.jpeg" },
          { imageURL: "/images/drones/taylors_mistake.jpeg" },
          { imageURL: "/images/guitar/guitar.jpg" },
        ]}
        isReadyToRender={textIsFinished}
      />
      <InterestsGroup
        title="Guitar"
        text={`The Earthlings call it "Rock and Roll Baby"`}
        sightingsData={[
          { imageURL: "/images/guitar/guitar.jpg" },
          { imageURL: "/images/drones/taylors_mistake.jpeg" },
        ]}
        isRTL
        isReadyToRender={textIsFinished}
      />
    </div>
  );
};
