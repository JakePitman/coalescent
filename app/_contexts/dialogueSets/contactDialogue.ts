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
      text: "Wait! I think I've found some contact information!",
      animationName: "ReadingScreen",
    },
    {
      text: "Now's our chance!",
      animationName: "Asserting",
    },
    {
      text: null,
      animationName: "Idle",
    },
  ],
};
