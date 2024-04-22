import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Robot } from "../app/_components/Experience/Robot";
import { Canvas } from "@react-three/fiber";
import { AnimationContextProvider } from "@contexts/AnimationContext";

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
  args: { scale: 0.2, position: [0, -3, 0], rotation: [0, 0, 0] },
};
