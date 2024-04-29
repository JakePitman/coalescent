import { Meta, StoryObj } from "@storybook/react";
import { IncomingData } from "@components/IncomingData";

const meta = {
  title: "Components/IncomingData",
  component: IncomingData,
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
      expanded: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
