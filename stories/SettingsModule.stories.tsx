import type { Meta, StoryObj } from "@storybook/react";
import { SettingsModule } from "@components/SettingsModule";

const meta = {
  title: "Components/SettingsModule",
  component: SettingsModule,
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
      expanded: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SettingsModule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
