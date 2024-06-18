import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { UserSettingsContextProvider } from "../app/_contexts/UserSettingsContext";
import { I18nProvider } from "../app/i18n";

const preview: Preview = {
  decorators: [
    (Story) => (
      <UserSettingsContextProvider>
        <I18nProvider>
          <Story />
        </I18nProvider>
      </UserSettingsContextProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
  },
};

export default preview;
