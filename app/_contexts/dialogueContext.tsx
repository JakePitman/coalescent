"use client";

import {
  createContext,
  useEffect,
  useContext,
  useState,
  useCallback,
} from "react";
import { usePageContext } from "@contexts/pageContext";
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
  messageId: string | null;
  animationName: AnimationName;
};
export type DialogueSet = { page: PageNames; dialogues: Dialogue[] };
type DialogueContext = {
  dialogue: Dialogue;
  incrementDialogue: (currentDialogueSet: DialogueSet) => void;
  dialogueSet: DialogueSet;
  setDialogueSet: (dialogueSet: PageNames | DialogueSet) => void;
};

const DialogueContext = createContext<DialogueContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const DialogueContextProvider = ({ children }: Props) => {
  const { page } = usePageContext();
  const [dialogueNumber, setDialogueNumber] = useState<number>(0);
  const [dialogueSet, setDialogueSetInState] =
    useState<DialogueSet>(jakeDialogue);

  useEffect(() => {
    setDialogueNumber(0);
  }, [dialogueSet]);

  const dialogue = dialogueSet.dialogues[dialogueNumber];

  const incrementDialogue = (currentDialogueSet: DialogueSet) => {
    setDialogueNumber((prev) => {
      const canIncrement = prev + 1 < currentDialogueSet.dialogues.length;
      return canIncrement ? prev + 1 : prev;
    });
  };

  const setDialogueSet = useCallback(
    (dialogueSet: PageNames | DialogueSet) => {
      if (typeof dialogueSet === "string") {
        // Use page name as index
        const newDialogueSet = pageToDialogueSetMap[dialogueSet];
        setDialogueSetInState(newDialogueSet);
      }
      if (typeof dialogueSet === "object") {
        // Use DialogueSet type
        setDialogueSetInState(dialogueSet);
      }
    },
    [setDialogueSetInState]
  );

  useEffect(() => {
    // Change dialogue set when page changes
    page && setDialogueSet(page);
  }, [page, setDialogueSet]);

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
