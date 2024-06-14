import { DialogueSet } from "@contexts/dialogueContext";

export const interestsDialogue: DialogueSet = {
  page: "/interests",
  dialogues: [
    {
      messageId: "interestsDialogue1",
      animationName: "IdleOutside",
    },
    {
      messageId: "interestsDialogue2",
      animationName: "Laughing",
    },
    {
      messageId: "interestsDialogue3",
      animationName: "Typing",
    },
    {
      messageId: null,
      animationName: "Idle",
    },
  ],
};
