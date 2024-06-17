import { useState } from "react";
import { CiGlobe } from "react-icons/ci";

import { LanguageSettings } from "./LanguageSettings";

type SettingsState = "language" | null;

type LanguageSettingsTriggerProps = {
  onClick: () => void;
};
const LanguageSettingsTrigger = ({ onClick }: LanguageSettingsTriggerProps) => (
  <div className="cursor-pointer" onClick={onClick}>
    <CiGlobe fontSize={30} />
    <p className="text-center text-xs">日本</p>
  </div>
);

export const SettingsModule = () => {
  const [settingsState, setSettingsState] = useState<SettingsState>(null);

  return (
    <div className="fixed top-5 right-5">
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
        <div className="border-solid border-white border-2">
          <LanguageSettings />
        </div>
      )}
    </div>
  );
};
