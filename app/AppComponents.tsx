"use client";
import { RouteChangeListener } from "@components/RouteChangeListener";
import { Dialogue } from "@components/Dialogue";
import { Experience } from "@components/Experience";

export const AppComponents = () => {
  return (
    <>
      <RouteChangeListener />
      <Dialogue />
      <Experience style={{ position: "absolute", zIndex: "0" }} />
    </>
  );
};
