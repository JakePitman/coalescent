"use client";
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
