"use client";
import { useEffect } from "react";
import { RouteChangeListener } from "@components/RouteChangeListener";
import { Dialogue } from "@components/Dialogue";
import { Experience } from "@components/Experience";
import { usePageContext } from "@contexts/pageContext";
import { useDialogueContext } from "@contexts/dialogueContext";

export const AppComponents = () => {
  const { page } = usePageContext();
  const { setDialogueSet } = useDialogueContext();

  useEffect(() => {
    page && setDialogueSet(page);
  }, [page, setDialogueSet]);
  return (
    <>
      <RouteChangeListener />
      <Dialogue />
      <Experience style={{ position: "absolute", zIndex: "0" }} />
    </>
  );
};
