import { DialogueSet } from "@contexts/dialogueContext";

export const contactDialogue: DialogueSet = {
  page: "/contact",
  dialogues: [
    {
      text: "Message 0 from /contact. Animation: Laughing",
      animationName: "Laughing",
    },
    {
      text: "Message 1 from /contact. Animation: ReadingScreen",
      animationName: "ReadingScreen",
    },
    {
      text: "Message 2 from /contact. Animation: Typing",
      animationName: "Typing",
    },
    {
      text: null,
      animationName: "Sleeping",
    },
  ],
};
