import type { Meta, StoryObj } from "@storybook/react";
import { Hologram } from "../app/_components/Experience/Hologram";
import { Canvas } from "@react-three/fiber";
import { PageContextProvider, usePageContext } from "@contexts/pageContext";
import { pageNames } from "@customTypes/pageNames";
import { useControls } from "leva";

const HologramWithControls = () => {
  const { setPage } = usePageContext();
  const { scale, position, rotation } = useControls("Props", {
    scale: 3,
    position: [0, -1, 0],
    rotation: [0, 0, 0],
  });
  useControls({
    page: {
      options: pageNames,
      onChange: (pageName) => {
        setPage(pageName);
      },
    },
  });
  return <Hologram scale={scale} position={position} rotation={rotation} />;
};

const meta = {
  title: "3DModels/Hologram",
  component: Hologram,
  parameters: {
    layout: "centered",
    controls: {
      disable: true,
      expanded: false,
    },
  },
  render: (args) => {
    return (
      <PageContextProvider>
        <Canvas
          style={{ border: "1px solid white", width: "80vw", height: "85vh" }}
        >
          <HologramWithControls />
        </Canvas>
      </PageContextProvider>
    );
  },
} satisfies Meta<typeof Hologram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
