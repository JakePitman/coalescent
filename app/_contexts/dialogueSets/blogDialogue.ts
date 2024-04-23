import { DialogueSet } from "@contexts/dialogueContext";

export const blogDialogue: DialogueSet = {
  page: "/blog",
  dialogues: [
    {
      text: "Message 0 from /blog. Animation: ShockedOutside",
      animationName: "ShockedOutside",
    },
    {
      text: "Message 1 from /blog. Animation: LookingOutside",
      animationName: "LookingOutside",
    },
    {
      text: "Message 2 from /blog. Animation: ReadingScreen",
      animationName: "ReadingScreen",
    },
    {
      text: null,
      animationName: "Sleeping",
    },
  ],
};
