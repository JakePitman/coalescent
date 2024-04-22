import type { Meta, StoryObj } from "@storybook/react";
import { Robot } from "../app/_components/Experience/Robot";
import { Canvas } from "@react-three/fiber";
import {
  AnimationContextProvider,
  useAnimationContext,
  animationNames,
} from "@contexts/AnimationContext";
import { useControls } from "leva";

const RobotWithControls = () => {
  const { setAnimationName } = useAnimationContext();
  const { scale, position, rotation } = useControls("Props", {
    scale: 0.2,
    position: [0, -3, -2.5],
    rotation: [0.4, 0.14, 0],
  });
  useControls({
    page: {
      options: animationNames,
      onChange: (pageName) => {
        setAnimationName(pageName);
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
      <AnimationContextProvider>
        <Canvas
          style={{ border: "1px solid white", width: "80vw", height: "85vh" }}
        >
          <RobotWithControls />
        </Canvas>
      </AnimationContextProvider>
    );
  },
} satisfies Meta<typeof Robot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
