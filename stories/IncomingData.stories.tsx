import { Meta, StoryObj } from "@storybook/react";
import { IncomingData } from "@components/IncomingData";
import { PageContextProvider, usePageContext } from "@contexts/pageContext";
import { DialogueContextProvider } from "@contexts/dialogueContext";
import { Dialogue } from "@components/Dialogue";
import { useControls } from "leva";
import { Props as IncomingDataProps } from "@components/IncomingData";
import { PageNames } from "@customTypes/pageNames";

type IncomingDataWithControlsProps = IncomingDataProps & {
  page?: PageNames;
};
const IncomingDataWithControls = (props: IncomingDataWithControlsProps) => {
  const { setPage } = usePageContext();

  const { page } = props;
  page && setPage(page);

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

  return <IncomingData {...props} />;
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
    (Story, { args }) => (
      <PageContextProvider>
        <DialogueContextProvider>
          <Story {...args} />
          <div id="portal" className="z-50" />
        </DialogueContextProvider>
      </PageContextProvider>
    ),
  ],
} satisfies Meta<typeof IncomingData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForcedOpen: Story = {
  args: { isForcedOpen: true },
};
export const HomePage: Story = {
  render: () => {
    return <IncomingDataWithControls isForcedOpen page="/" />;
  },
};
export const JakePage: Story = {
  render: () => {
    return <IncomingDataWithControls isForcedOpen page="/jake" />;
  },
};
export const InterestsPage: Story = {
  render: () => {
    return <IncomingDataWithControls isForcedOpen page="/interests" />;
  },
};
export const BlogPage: Story = {
  render: () => {
    return <IncomingDataWithControls isForcedOpen page="/blog" />;
  },
};
export const ContactPage: Story = {
  render: () => {
    return <IncomingDataWithControls isForcedOpen page="/contact" />;
  },
};
export const WithDialogue: Story = {
  args: {},
  render: () => (
    <>
      <Dialogue />
      <IncomingDataWithControls />
    </>
  ),
};
