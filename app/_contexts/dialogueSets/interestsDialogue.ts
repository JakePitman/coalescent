import { DialogueSet } from "@contexts/dialogueContext";

export const interestsDialogue: DialogueSet = {
  page: "/interests",
  dialogues: [
    {
      text: "Message 0 from /interests. Animation: Asserting",
      animationName: "Asserting",
    },
    {
      text: "Message 1 from /interests. Animation: PonderingScreen",
      animationName: "PonderingScreen",
    },
    {
      text: "Message 2 from /interests. Animation: Typing",
      animationName: "Typing",
    },
    {
      text: null,
      animationName: "Sleeping",
    },
  ],
};
