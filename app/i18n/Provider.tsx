"use client";
import { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./constants";
import messages from "./messages";

type Props = {
  children: any;
  locale: string;
};

const Provider = ({ children, locale = LOCALES.ENGLISH }: Props) => {
  console.log("MESSAGES: ", messages, locale);
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
