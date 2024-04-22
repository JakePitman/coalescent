import type { Meta, StoryObj } from "@storybook/react";
import { Dialogue } from "../app/_components/Dialogue";

const shortText = "Hello world";
const midText = "Hang on, that's strange - I'm getting a transmission!";
const longText = `"Oooooooooohhh look at me, I must be reeeaaaally smart, because I use three monitors. Only smart people use three monitors"`;

const meta = {
  title: "Components/Dialogue",
  component: Dialogue,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { options: [shortText, midText, longText, null] },
  },
  args: { text: shortText },
} satisfies Meta<typeof Dialogue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortText: Story = {
  args: {
    text: shortText,
  },
};

export const MidText: Story = {
  args: {
    text: midText,
  },
};

export const LongText: Story = {
  args: {
    text: longText,
  },
};
