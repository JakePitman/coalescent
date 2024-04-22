import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Hologram } from "../app/_components/Experience/Hologram";
import { Canvas } from "@react-three/fiber";
import { PageContextProvider, usePageContext } from "@contexts/pageContext";
import { pageNames } from "@customTypes/pageNames";

const AnimationControls = () => {
  const { page, setPage } = usePageContext();

  const activeStyles = "border-b-white";
  const inactiveStyles = "border-b-transparent";

  return (
    <div className="relative z-10">
      <div
        className="absolute flex flex-col"
        style={{ right: "10px", top: "10px" }}
      >
        {pageNames.map((pageName) => (
          <button
            onClick={() => setPage(pageName)}
            key={pageName}
            className={
              "border-b-2" +
              " " +
              (page === pageName ? activeStyles : inactiveStyles)
            }
          >
            {pageName}
          </button>
        ))}
      </div>
    </div>
  );
};

const meta = {
  title: "3DModels/Hologram",
  component: Hologram,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    scale: { control: "number" },
    position: { control: "array" },
  },
  render: (args) => (
    <PageContextProvider>
      <AnimationControls />
      <Canvas
        style={{ border: "1px solid white", width: "95vw", height: "90vh" }}
      >
        <Hologram {...args} />
      </Canvas>
    </PageContextProvider>
  ),
} satisfies Meta<typeof Hologram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { scale: 4, position: [0, -1.5, 0] },
};
