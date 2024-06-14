import { DialogueSet } from "@contexts/dialogueContext";

export const blogDialogue: DialogueSet = {
  page: "/blog",
  dialogues: [
    {
      messageId: "blogDialogue1",
      animationName: "PonderingScreen",
    },
    {
      messageId: "blogDialogue2",
      animationName: "Typing",
    },
    {
      messageId: "blogDialogue3",
      animationName: "ReadingScreen",
    },
    {
      messageId: "blogDialogue4",
      animationName: "ShockedScreen",
    },
    {
      messageId: "blogDialogue5",
      animationName: "Laughing",
    },
    {
      messageId: "blogDialogue6",
      animationName: "Happy",
    },
    {
      messageId: null,
      animationName: "Idle",
    },
  ],
};
