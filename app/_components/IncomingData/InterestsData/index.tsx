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
        sightingsData={[{ image: null }]}
        isRTL
        isReadyToRender={textIsFinished}
      />
      <InterestsGroup
        title="Diving"
        text="Sighted in the oceans of Australia, New Zealand, and Thailand"
        sightingsData={[{ image: null }, { image: null }, { image: null }]}
        isReadyToRender={textIsFinished}
      />
      <InterestsGroup
        title="Guitar"
        text={`The Earthlings call it "Rock and Roll Baby"`}
        sightingsData={[{ image: null }, { image: null }]}
        isRTL
        isReadyToRender={textIsFinished}
      />
    </div>
  );
};
