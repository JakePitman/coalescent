import { DialogueSet } from "@contexts/dialogueContext";

export const contactDialogue: DialogueSet = {
  page: "/contact",
  dialogues: [
    {
      messageId: "contactDialogue1",
      animationName: "IdleOutside",
    },
    {
      messageId: "contactDialogue2",
      animationName: "PonderingScreen",
    },
    {
      messageId: "contactDialogue3",
      animationName: "ReadingScreen",
    },
    {
      messageId: "contactDialogue4",
      animationName: "ShockedScreen",
    },
    {
      messageId: null,
      animationName: "Idle",
    },
  ],
};
