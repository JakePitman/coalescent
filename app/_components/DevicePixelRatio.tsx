"use client";
import { useEffect, useState } from "react";

export const DevicePixelRatio = () => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText(window?.devicePixelRatio.toString());
  }, []);
  return <p className="absolute top-4 left-4 z-30">DPR: {text}</p>;
};
