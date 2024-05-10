import { Meta, StoryObj } from "@storybook/react";
import { IncomingData } from "@components/IncomingData";
import { PageContextProvider, usePageContext } from "@contexts/pageContext";
import { DialogueContextProvider } from "@contexts/dialogueContext";
import { Dialogue } from "@components/Dialogue";
import { useControls } from "leva";

const IncomingDataWithControls = () => {
  const { setPage } = usePageContext();

  useControls("App Context (IncomingData)", {
    page: {
      options: {
        "/jake": "/jake",
        "/interests": "/interests",
        "/projects": "/projects",
        "/blog": "/blog",
        "/contact": "/contact",
        "/": "/",
      },
      onChange: (pageName) => {
        setPage(pageName);
      },
    },
  });

  return <IncomingData />;
};

const meta = {
  title: "Components/IncomingData",
  component: IncomingDataWithControls,
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
      expanded: false,
    },
  },
  decorators: [
    (Story) => (
      <PageContextProvider>
        <DialogueContextProvider>
          <Dialogue />
          <Story />
        </DialogueContextProvider>
      </PageContextProvider>
    ),
  ],
} satisfies Meta<typeof IncomingData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
