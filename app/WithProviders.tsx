"use client";
import { useState, useEffect } from "react";
import { PageContextProvider } from "@contexts/pageContext";
import { FlightContextProvider } from "@contexts/flightContext";
import { DialogueContextProvider } from "@contexts/dialogueContext";
import { UserSettingsContextProvider } from "@contexts/UserSettingsContext";
import { I18nProvider, LOCALES } from "./i18n";

type WithProvidersProps = {
  children: React.ReactNode;
};

export const WithProviders = ({ children }: WithProvidersProps) => {
  return (
    <PageContextProvider>
      <FlightContextProvider>
        <UserSettingsContextProvider>
          <I18nProvider>
            <DialogueContextProvider>{children}</DialogueContextProvider>
          </I18nProvider>
        </UserSettingsContextProvider>
      </FlightContextProvider>
    </PageContextProvider>
  );
};
