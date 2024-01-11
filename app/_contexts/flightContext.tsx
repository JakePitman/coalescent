"use client";
// This hook returns an object with x,y coords normalized to a range of -1 to 1, and a setter function
// Originally designed to set the coords based on the movement of Coalescent,
// for example, when rotating to the right, set x to 1, to the left, -1
// No longer used, but may be useful in future
import { createContext, useContext, useState } from "react";

type DirectionValue = -1 | 0 | 1;
type DirectionValues = { x: DirectionValue; y: DirectionValue } | undefined;
type FlightContext = {
  direction: DirectionValues;
  setDirection: React.Dispatch<
    React.SetStateAction<DirectionValues | undefined>
  >;
};

const FlightContext = createContext<FlightContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const FlightContextProvider = ({ children }: Props) => {
  const [direction, setDirection] = useState<DirectionValues | undefined>({
    x: 0,
    y: 0,
  });

  return (
    <FlightContext.Provider value={{ direction, setDirection }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error(
      "useFlightContext must be used within a FlightContextProvider"
    );
  }
  return context;
};
