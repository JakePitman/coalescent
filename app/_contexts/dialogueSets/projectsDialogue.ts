import { DialogueSet } from "@contexts/dialogueContext";

export const projectsDialogue: DialogueSet = {
  page: "/projects",
  dialogues: [
    {
      text: "Message 0 from /projects. Animation: ShockedScreen",
      animationName: "ShockedScreen",
    },
    {
      text: "Message 1 from /projects. Animation: Laughing",
      animationName: "Laughing",
    },
    {
      text: "Message 2 from /projects. Animation: Explaining",
      animationName: "Explaining",
    },
    {
      text: null,
      animationName: "Sleeping",
    },
  ],
};
