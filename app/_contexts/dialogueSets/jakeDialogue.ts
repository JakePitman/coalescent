import { DialogueSet } from "@contexts/dialogueContext";

export const jakeDialogue: DialogueSet = {
  page: "/jake",
  dialogues: [
    {
      text: "Message 0 from /jake. Animation: Idle",
      animationName: "Idle",
    },
    {
      text: "Message 1 from /jake. Animation: Happy",
      animationName: "Happy",
    },
    {
      text: "Message 2 from /jake. Animation: LookingOutside",
      animationName: "LookingOutside",
    },
    {
      text: null,
      animationName: "Sleeping",
    },
  ],
};
