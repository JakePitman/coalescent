import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Dialogue } from "../app/_components/Dialogue";

const meta = {
  title: "Components/Dialogue",
  component: Dialogue,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
  args: { text: "Hello world" },
} satisfies Meta<typeof Dialogue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: "Basic dialogue box example",
  },
};
