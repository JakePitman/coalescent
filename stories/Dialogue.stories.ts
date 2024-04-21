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

export const LongText: Story = {
  args: {
    text: "One thing, I don't know why, it doesn't even matter how hard you try. Keep that in mind I designed this rhyme to explain in due time - all - I - know - Time is a valuable thing. Watch it fly by as the pendulum swings.",
  },
};
