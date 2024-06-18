"use client";
import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { useUserSettingsContext } from "@contexts/UserSettingsContext";

import messages from "./messages";

type Props = {
  children: any;
};

const Provider = ({ children }: Props) => {
  const { userSettings } = useUserSettingsContext();
  const { locale } = userSettings;

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
