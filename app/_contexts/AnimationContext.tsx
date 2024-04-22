"use client";
import { useState } from "react";
import { createContext, useContext } from "react";

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

type AnimationContext = {
  animationName: AnimationName;
  setAnimationName: React.Dispatch<React.SetStateAction<AnimationName>>;
} | null;

const AnimationContext = createContext<AnimationContext>(null);

type Props = {
  children: React.ReactNode;
};

export const AnimationContextProvider = ({ children }: Props) => {
  const [animationName, setAnimationName] = useState<AnimationName>("Sleeping");

  return (
    <AnimationContext.Provider value={{ animationName, setAnimationName }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }

  return context;
};
