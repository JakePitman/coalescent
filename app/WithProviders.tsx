"use client";
import { useState, useEffect } from "react";
import { PageContextProvider } from "@contexts/pageContext";
import { FlightContextProvider } from "@contexts/flightContext";
import { DialogueContextProvider } from "@contexts/dialogueContext";
import { I18nProvider, LOCALES } from "./i18n";

type WithProvidersProps = {
  children: React.ReactNode;
};

export const WithProviders = ({ children }: WithProvidersProps) => {
  const [lang, setLang] = useState<string>(LOCALES.JAPANESE);

  useEffect(() => {
    const locale = navigator.language;
    const baseLocale = locale.split("-")[0];
    if (baseLocale === "en") {
      setLang(LOCALES.ENGLISH);
    } else if (baseLocale === "ja") {
      setLang(LOCALES.JAPANESE);
    }
  }, []);

  return (
    <PageContextProvider>
      <FlightContextProvider>
        <I18nProvider locale={lang}>
          <DialogueContextProvider>{children}</DialogueContextProvider>
        </I18nProvider>
      </FlightContextProvider>
    </PageContextProvider>
  );
};
