import { DialogueSet } from "@contexts/dialogueContext";

export const blogDialogue: DialogueSet = {
  page: "/blog",
  dialogues: [
    {
      text: "Hmm what else can we find out about this guy..?",
      animationName: "PonderingScreen",
    },
    {
      text: "Let me see if I can dig up some more info...",
      animationName: "Typing",
    },
    {
      text: "...",
      animationName: "ReadingScreen",
    },
    {
      text: "Wait, this is..!",
      animationName: "ShockedScreen",
    },
    {
      text: "I've hacked into his diary.",
      animationName: "Laughing",
    },
    {
      text: "You can thank me later ~",
      animationName: "Happy",
    },
    {
      text: null,
      animationName: "Idle",
    },
  ],
};
