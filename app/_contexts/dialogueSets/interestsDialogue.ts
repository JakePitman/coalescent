import { DialogueSet } from "@contexts/dialogueContext";

export const interestsDialogue: DialogueSet = {
  page: "/interests",
  dialogues: [
    {
      text: "That looks like a 'whale shark' - a large aquatic species found only on Earth.",
      animationName: "IdleOutside",
    },
    {
      text: "If this is what he does in his spare time, we might need a snorkel to find this guy.",
      animationName: "Laughing",
    },
    {
      text: "Sending through information on the target's habits and interests.",
      animationName: "Typing",
    },
    {
      text: null,
      animationName: "Idle",
    },
  ],
};
