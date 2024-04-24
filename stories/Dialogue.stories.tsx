import type { Meta, StoryObj } from "@storybook/react";
import { Dialogue } from "../app/_components/Dialogue";
import { PageContextProvider, usePageContext } from "@contexts/pageContext";
import { DialogueContextProvider } from "@contexts/dialogueContext";
import { useControls } from "leva";

const DialogueWithControls = () => {
  const { setPage } = usePageContext();

  useControls("App Context (Dialogue)", {
    page: {
      options: {
        "/jake": "/jake",
        "/": "/",
        "/interests": "/interests",
        "/projects": "/projects",
        "/blog": "/blog",
        "/contact": "/contact",
      },
      onChange: (pageName) => {
        setPage(pageName);
      },
    },
  });

  return <Dialogue />;
};

const meta = {
  title: "Components/Dialogue",
  component: Dialogue,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
  decorators: [
    (Story) => {
      return (
        <PageContextProvider>
          <DialogueContextProvider>
            <Story />
          </DialogueContextProvider>
        </PageContextProvider>
      );
    },
  ],
} satisfies Meta<typeof Dialogue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => {
    return <DialogueWithControls {...args} />;
  },
};

export const OnPage: Story = {
  render: (args) => {
    return (
      <div
        className="bg-blue-50 w-[100vw] h-[90vh] overflow-scroll relative"
        style={{ scrollbarWidth: "none" }}
      >
        <DialogueWithControls {...args} />

        <div className="text-black p-4">
          <h1 className=" text-5xl">Tutant Meenage Neetle Teetles</h1>
          <p>{"invent yourself and then reinvent yourself,"}</p>
          <p>{"don't swim in the same slough"}</p>
          <p>{"invent yourself and then reinvent yourself"}</p>
          <p>{"and"}</p>
          <p>{"stay out of the clutches of mediocrity"}</p>
          <br />
          <p>{"invent yourself and then reinvent yourself,"}</p>
          <p>{"change your tone and shape so often that they can"}</p>
          <p>{"never"}</p>
          <p>{"categorize you."}</p>
          <br />
          <p>{"reinvigorate yourself and"}</p>
          <p>{"accept what is"}</p>
          <p>{"but only on the terms that you have invented"}</p>
          <p>{"and reinvented."}</p>
          <br />
          <p>{"be self taught."}</p>
          <br />
          <p>{"and reinvent your life because you must;"}</p>
          <p>{"it is your life and"}</p>
          <p>{"its history"}</p>
          <p>{"and the present"}</p>
          <p>{"belong only to"}</p>
          <p>{"you."}</p>
        </div>
      </div>
    );
  },
};
