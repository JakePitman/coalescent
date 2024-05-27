"use client";
import { useEffect, useState } from "react";

// Issues have been found in the positioning of <Html> components
// that have transform = true, and this may be related to different
// device pixel ratios. Use this component to display DPR when testing
// on different mobile devices.
export const DevicePixelRatio = () => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText(window?.devicePixelRatio.toString());
  }, []);
  return <p className="absolute top-4 left-4 z-30">DPR: {text}</p>;
};
