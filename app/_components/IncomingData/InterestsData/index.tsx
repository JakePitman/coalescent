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
        title="Diving"
        text="Sightings in the oceans of Australia, New Zealand, and Thailand"
        isReadyToRender={textIsFinished}
      />
    </div>
  );
};
