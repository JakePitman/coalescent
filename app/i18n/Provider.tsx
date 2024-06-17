"use client";
import { useEffect } from "react";
import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { useUserSettingsContext } from "@contexts/UserSettingsContext";

import { LOCALES } from "@contexts/UserSettingsContext";
import messages from "./messages";

type Props = {
  children: any;
};

const Provider = ({ children }: Props) => {
  const { userSettings, dispatch } = useUserSettingsContext();
  const { locale } = userSettings;

  useEffect(() => {
    const locale = navigator.language;
    const baseLocale = locale.split("-")[0];
    if (baseLocale === "en") {
      dispatch({ type: "SET_LOCALE", locale: LOCALES.ENGLISH });
    } else if (baseLocale === "ja") {
      dispatch({ type: "SET_LOCALE", locale: LOCALES.JAPANESE });
    }
  }, [dispatch]);

  return (
    <IntlProvider
      textComponent={Fragment as any}
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
