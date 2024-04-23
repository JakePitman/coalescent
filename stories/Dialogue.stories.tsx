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

export const OnPage: Story = {
  render: (args) => {
    return (
      <div
        className="bg-blue-50 w-[100vw] h-[90vh] overflow-scroll relative"
        style={{ scrollbarWidth: "none" }}
      >
        <Dialogue {...args} />

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
