import { useWindowDimensions } from "@hooks/useWindowDimensions";
import React, { useState } from "react";

// Convert number to range from 0 -> 1, based on min/max bounds
const normalize = (val: number, min: number, max: number) =>
  ((val - min) / (max - min)) * 2 - 1;

// Calculates the amount that the camera should offset itelf
// on the x & y axes, based on mouse position.
export const useNormalizedMouseCoords = () => {
  const { height, width } = useWindowDimensions();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: { clientX: number; clientY: number }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  const normalized = {
    x: normalize(mousePosition.x, 0, width),
    y: normalize(mousePosition.y, 0, height),
  };
  return normalized;
};
