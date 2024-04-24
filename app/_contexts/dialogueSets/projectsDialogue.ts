import { DialogueSet } from "@contexts/dialogueContext";

export const projectsDialogue: DialogueSet = {
  page: "/projects",
  dialogues: [
    {
      text: "Do you think the prophecy is true?",
      animationName: "Explaining",
    },
    {
      text: "That the target's engineering skills will bring victory to the Resistance?",
      animationName: "Asserting",
    },
    {
      text: "Let's take a look at some of the things he's built...",
      animationName: "Typing",
    },
    {
      text: "Woah! This is impressive!",
      animationName: "PonderingScreen",
    },
    {
      text: "Here, check it out.",
      animationName: "Typing",
    },
    {
      text: null,
      animationName: "Idle",
    },
  ],
};
