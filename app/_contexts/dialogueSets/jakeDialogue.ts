import { DialogueSet } from "@contexts/dialogueContext";

export const jakeDialogue: DialogueSet = {
  page: "/jake",
  dialogues: [
    {
      text: "Woah! Did you see that??",
      animationName: "ShockedOutside",
    },
    {
      text: "That... kinda looks like our target, doesn't it?",
      animationName: "LookingOutside",
    },
    {
      text: "We must be getting close!",
      animationName: "Happy",
    },
    {
      text: "Let me do a scan on this place...",
      animationName: "Typing",
    },
    {
      text: "...",
      animationName: "Typing",
    },
    {
      text: "Found something! Looks like some info on the target.",
      animationName: "ReadingScreen",
    },
    {
      text: "Sending it through now.",
      animationName: "Typing",
    },
    {
      text: null,
      animationName: "Idle",
    },
  ],
};
