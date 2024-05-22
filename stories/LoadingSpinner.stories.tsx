import { Meta, StoryObj } from "@storybook/react";
import { LoadingSpinner } from "@components/LoadingSpinner";

const meta: Meta = {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
      expanded: false,
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallContainer: Story = {
  args: {},
  render: () => (
    <div className="w-6 h-6 relative">
      <LoadingSpinner />
    </div>
  ),
};

export const MidContainer: Story = {
  args: {},
  render: () => (
    <div className="w-12 h-12 relative">
      <LoadingSpinner />
    </div>
  ),
};

export const LargeContainer: Story = {
  args: {},
  render: () => (
    <div className="w-24 h-24 relative">
      <LoadingSpinner />
    </div>
  ),
};
