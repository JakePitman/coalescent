"use client";

import { createContext, useEffect, useContext, useState } from "react";
import { PageNames } from "@customTypes/pageNames";
import {
  homeDialogue,
  jakeDialogue,
  interestsDialogue,
  projectsDialogue,
  blogDialogue,
  contactDialogue,
} from "./dialogueSets";

const pageToDialogueSetMap = {
  "/": homeDialogue,
  "/jake": jakeDialogue,
  "/interests": interestsDialogue,
  "/projects": projectsDialogue,
  "/blog": blogDialogue,
  "/contact": contactDialogue,
} as const;

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
  setDialogueSet: (page: PageNames) => void;
};

const DialogueContext = createContext<DialogueContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const DialogueContextProvider = ({ children }: Props) => {
  const [dialogueNumber, setDialogueNumber] = useState<number>(0);
  const [dialogueSet, setDialogueSetInState] =
    useState<DialogueSet>(jakeDialogue);

  useEffect(() => {
    setDialogueNumber(0);
  }, [dialogueSet]);

  const dialogue = dialogueSet.dialogues[dialogueNumber];

  const incrementDialogue = () => {
    const incrementLimit = dialogueSet.dialogues.length - 1;
    if (dialogueNumber < incrementLimit) {
      setDialogueNumber((prev) => prev + 1);
    }
  };

  const setDialogueSet = (page: PageNames) => {
    const newDialogueSet = pageToDialogueSetMap[page];
    setDialogueSetInState(newDialogueSet);
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
