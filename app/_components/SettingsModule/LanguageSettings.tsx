import {
  useUserSettingsContext,
  LOCALES,
  Locale,
} from "@contexts/UserSettingsContext";
import classnames from "classnames";

type LanguageOptionProps = {
  label: string;
  locale: Locale;
  dismiss: () => void;
};
const LanguageOption = ({ label, locale, dismiss }: LanguageOptionProps) => {
  const { userSettings, dispatch } = useUserSettingsContext();
  const { locale: currentLocale } = userSettings;

  return (
    <div
      className="flex items-center pb-3 last:pb-0 cursor-pointer sm:text-base text-xl"
      onClick={(e) => {
        e.stopPropagation();
        dispatch({ type: "SET_LOCALE", locale });
        dismiss();
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

type LanguageSettingsProps = {
  dismiss: () => void;
};
export const LanguageSettings = ({ dismiss }: LanguageSettingsProps) => {
  return (
    <div className="flex flex-col">
      <LanguageOption
        label="English"
        locale={LOCALES.ENGLISH}
        dismiss={dismiss}
      />
      <LanguageOption
        label="日本語"
        locale={LOCALES.JAPANESE}
        dismiss={dismiss}
      />
    </div>
  );
};
