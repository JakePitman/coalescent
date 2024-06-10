import { DialogueSet } from "@contexts/dialogueContext";

export const contactDialogue: DialogueSet = {
  page: "/contact",
  dialogues: [
    {
      text: "That's cute.",
      animationName: "IdleOutside",
    },
    {
      text: "If only he were that easy to find...",
      animationName: "PonderingScreen",
    },
    {
      text: "Wait! I'm getting a transmission.",
      animationName: "ReadingScreen",
    },
    {
      text: "It's him..!!",
      animationName: "ShockedScreen",
    },
    {
      text: null,
      animationName: "Idle",
    },
  ],
};
