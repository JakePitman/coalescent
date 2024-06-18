import {
  useUserSettingsContext,
  LOCALES,
  Locale,
} from "@contexts/UserSettingsContext";
import classnames from "classnames";

type LanguageOptionProps = {
  label: string;
  locale: Locale;
};
const LanguageOption = ({ label, locale }: LanguageOptionProps) => {
  const { userSettings, dispatch } = useUserSettingsContext();
  const { locale: currentLocale } = userSettings;

  return (
    <div
      className="flex items-center pb-3 last:pb-0 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        dispatch({ type: "SET_LOCALE", locale });
      }}
    >
      <div
        className={classnames(
          "mr-2 w-5 h-5 border-solid border-white border-2 rounded",
          {
            "bg-white": currentLocale === locale,
          }
        )}
      />
      <p>{label}</p>
    </div>
  );
};

export const LanguageSettings = () => {
  return (
    <div className="flex flex-col">
      <LanguageOption label="English" locale={LOCALES.ENGLISH} />
      <LanguageOption label="日本語" locale={LOCALES.JAPANESE} />
    </div>
  );
};
