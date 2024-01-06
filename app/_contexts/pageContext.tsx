"use client";

import { createContext, useContext, useState } from "react";
import { PageNames } from "@customTypes/pageNames";

type PageContext = {
  page: PageNames | undefined;
  setPage: React.Dispatch<React.SetStateAction<PageNames | undefined>>;
};

const PageContext = createContext<PageContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const PageContextProvider = ({ children }: Props) => {
  const [page, setPage] = useState<PageNames | undefined>("/");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};
