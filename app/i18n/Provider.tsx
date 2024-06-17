"use client";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./constants";
import messages from "./messages";

type Props = {
  children: any;
};

const Provider = ({ children }: Props) => {
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
    <IntlProvider
      textComponent={Fragment as any}
      locale={lang}
      messages={messages[lang]}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
