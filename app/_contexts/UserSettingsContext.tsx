"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

export type Locale = "en-uk" | "ja-jp";
export const LOCALES = {
  ENGLISH: "en-uk",
  JAPANESE: "ja-jp",
} as const;
type UserSettings = {
  locale: Locale;
};
type Action = { type: "SET_LOCALE"; locale: Locale };
type UserSettingsContext = {
  userSettings: UserSettings;
  dispatch: React.Dispatch<Action>;
};

const UserSettingsContext = createContext<UserSettingsContext | null>(null);

type Props = {
  children: React.ReactNode;
};

const reducer = (userSettings: UserSettings, action: Action) => {
  switch (action.type) {
    case "SET_LOCALE": {
      return { ...userSettings, locale: action.locale };
    }
  }
};

export const UserSettingsContextProvider = ({ children }: Props) => {
  const [userSettings, dispatch] = useReducer(reducer, {
    locale: LOCALES.ENGLISH,
  });

  useEffect(() => {
    const locale = navigator.language;
    const baseLocale = locale.split("-")[0];

    if (baseLocale === "en") {
      dispatch({ type: "SET_LOCALE", locale: LOCALES.ENGLISH });
    } else if (baseLocale === "ja") {
      dispatch({ type: "SET_LOCALE", locale: LOCALES.JAPANESE });
    }
  }, []);

  return (
    <UserSettingsContext.Provider value={{ userSettings, dispatch }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export const useUserSettingsContext = () => {
  const context = useContext(UserSettingsContext);
  if (!context) {
    throw new Error(
      "useUserSettingsContext must be used within a UserSettingsContextProvider"
    );
  }
  return context;
};
