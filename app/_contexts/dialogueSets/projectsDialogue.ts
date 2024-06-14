import { DialogueSet } from "@contexts/dialogueContext";

export const projectsDialogue: DialogueSet = {
  page: "/projects",
  dialogues: [
    {
      messageId: "projectsDialogue1",
      animationName: "Explaining",
    },
    {
      messageId: "projectsDialogue2",
      animationName: "Asserting",
    },
    {
      messageId: "projectsDialogue3",
      animationName: "Typing",
    },
    {
      messageId: "projectsDialogue4",
      animationName: "PonderingScreen",
    },
    {
      messageId: "projectsDialogue5",
      animationName: "Typing",
    },
    {
      messageId: null,
      animationName: "Idle",
    },
  ],
};
