import { useState } from "react";

import { InterestsGroup } from "./InterestsGroup";
import { Sighting } from "./Sighting";
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
        sightings={[<Sighting key="1.1" />]}
        isReadyToRender={textIsFinished}
      />
      <InterestsGroup
        title="Diving"
        text="Sighted in the oceans of Australia, New Zealand, and Thailand"
        sightings={[
          <Sighting key="3.1" />,
          <Sighting key="3.2" />,
          <Sighting key="3.3" />,
        ]}
        isReadyToRender={textIsFinished}
      />
      <InterestsGroup
        title="Guitar"
        text={`The Earthlings call it "Rock and Roll Baby"`}
        sightings={[<Sighting key="2.1" />, <Sighting key="2.2" />]}
        isReadyToRender={textIsFinished}
      />
    </div>
  );
};
