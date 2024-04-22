import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Robot } from "../app/_components/Experience/Robot";
import { Canvas } from "@react-three/fiber";
import {
  AnimationContextProvider,
  useAnimationContext,
  animationNames,
} from "@contexts/AnimationContext";

const AnimationControls = () => {
  const { animationName, setAnimationName } = useAnimationContext();

  const activeStyles = "border-b-white";
  const inactiveStyles = "border-b-transparent";

  return (
    <div className="relative z-10">
      <div
        className="absolute flex flex-col"
        style={{ right: "10px", top: "10px" }}
      >
        {animationNames.map((animationLabel) => (
          <button
            onClick={() => setAnimationName(animationLabel)}
            key={animationLabel}
            className={
              "border-b-2" +
              " " +
              (animationName === animationLabel ? activeStyles : inactiveStyles)
            }
          >
            {animationLabel}
          </button>
        ))}
      </div>
    </div>
  );
};

const meta = {
  title: "3DModels/Robot",
  component: Robot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scale: { control: "number" },
    position: { control: "array" },
    rotation: { control: "array" },
  },
  render: (args) => (
    <AnimationContextProvider>
      <AnimationControls />
      <Canvas
        style={{ border: "1px solid white", width: "95vw", height: "90vh" }}
      >
        <Robot {...args} />
      </Canvas>
    </AnimationContextProvider>
  ),
} satisfies Meta<typeof Robot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { scale: 0.2, position: [0, -3, -2], rotation: [0.4, -0.2, 0] },
};
