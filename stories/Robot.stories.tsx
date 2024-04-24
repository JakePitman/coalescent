import type { Meta, StoryObj } from "@storybook/react";
import { Robot } from "../app/_components/Experience/Robot";
import { Canvas } from "@react-three/fiber";
import {
  animationNames,
  useDialogueContext,
  DialogueContextProvider,
  DialogueSet,
} from "@contexts/dialogueContext";
import { useControls } from "leva";
import { PageContextProvider } from "@contexts/pageContext";
import { Dialogue } from "@components/Dialogue";

const dummyDialogueSetsMap: { [index: string]: DialogueSet } = {};
animationNames.forEach((animationName) => {
  dummyDialogueSetsMap[animationName] = {
    page: "/",
    dialogues: [
      {
        text: `This dialogue triggers the ${animationName} animation!`,
        animationName,
      },
    ],
  };
});

console.log({ dummyDialogueSetsMap });

const RobotWithControls = () => {
  const { setDialogueSet } = useDialogueContext();
  const { scale, position, rotation } = useControls("Props (Robot)", {
    scale: 0.2,
    position: [0, -2.5, -2.5],
    rotation: [0.4, 0.14, 0],
  });
  useControls("App Context (Robot)", {
    animation: {
      options: animationNames,
      onChange: (animationName) => {
        const newDialogueSet = dummyDialogueSetsMap[animationName];
        // TODO: Find out why this is still based off the old setDialogueSet
        setDialogueSet(newDialogueSet);
      },
    },
  });
  return <Robot scale={scale} position={position} rotation={rotation} />;
};

const meta = {
  title: "3DModels/Robot",
  component: Robot,
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
      expanded: false,
    },
  },
  render: (args) => {
    return (
      <PageContextProvider>
        <DialogueContextProvider>
          <Dialogue />
          <Canvas
            style={{ border: "1px solid white", width: "80vw", height: "85vh" }}
          >
            <RobotWithControls />
          </Canvas>
        </DialogueContextProvider>
      </PageContextProvider>
    );
  },
} satisfies Meta<typeof Robot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
