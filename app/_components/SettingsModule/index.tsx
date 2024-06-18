"use client";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FormattedMessage } from "react-intl";

import { LanguageSettings } from "./LanguageSettings";

type SettingsState = "language" | null;

type LanguageSettingsTriggerProps = {
  onClick: () => void;
};
const LanguageSettingsTrigger = ({ onClick }: LanguageSettingsTriggerProps) => (
  <div
    className="cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    <CiGlobe fontSize={30} />
    <p className="text-center text-xs">
      <FormattedMessage id="settingsCurrentLanguage" defaultMessage="Lang" />
    </p>
  </div>
);

export const SettingsModule = () => {
  const [settingsState, setSettingsState] = useState<SettingsState>(null);

  return (
    <div className="fixed sm:top-5 sm:right-5 sm:bottom-auto sm:left-auto left-5 bottom-5 z-50 flex sm:flex-col flex-col-reverse sm:items-end items-start">
      <div className="flex justify-end">
        <LanguageSettingsTrigger
          onClick={() => {
            if (settingsState === "language") {
              setSettingsState(null);
              return;
            }
            setSettingsState("language");
          }}
        />
      </div>
      {!!settingsState && (
        <div className="rounded sm:mt-3 mt-0 sm:mb-0 mb-3 p-5 bg-gray-500/30 shadow-[0_0_15px_2px_white_inset] border-solid border-[1px] border-white">
          <LanguageSettings />
        </div>
      )}
    </div>
  );
};
