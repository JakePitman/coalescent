"use client";

import { createContext, useContext, useState } from "react";
import { PageNames } from "@customTypes/pageNames";
import { jakeDialogue } from "./dialogueSets";

export const animationNames = [
  "Sleeping",
  "Idle",
  "Typing",
  "Explaining",
  "Asserting",
  "Happy",
  "Laughing",
  "IdleOutside",
  "LookingOutside",
  "ShockedOutside",
  "ReadingScreen",
  "PonderingScreen",
  "ShockedScreen",
] as const;
export type AnimationName = (typeof animationNames)[number];
export type Dialogue = {
  text: string | null;
  animationName: AnimationName;
};
export type DialogueSet = { page: PageNames; dialogues: Dialogue[] };
type DialogueContext = {
  dialogue: Dialogue;
  incrementDialogue: () => void;
  dialogueSet: DialogueSet;
  setDialogueSet: React.Dispatch<React.SetStateAction<DialogueSet>>;
};

const DialogueContext = createContext<DialogueContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const DialogueContextProvider = ({ children }: Props) => {
  const [dialogueNumber, setDialogueNumber] = useState<number>(0);
  const [dialogueSet, setDialogueSet] = useState<DialogueSet>(jakeDialogue);

  const dialogue = dialogueSet.dialogues[dialogueNumber];

  const incrementDialogue = () => {
    setDialogueNumber((prev) => prev + 1);
  };

  return (
    <DialogueContext.Provider
      value={{ dialogue, incrementDialogue, dialogueSet, setDialogueSet }}
    >
      {children}
    </DialogueContext.Provider>
  );
};

export const useDialogueContext = () => {
  const context = useContext(DialogueContext);

  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }

  return context;
};
