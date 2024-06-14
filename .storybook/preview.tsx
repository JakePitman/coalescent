import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { I18nProvider } from "../app/i18n";

const preview: Preview = {
  decorators: [
    (Story) => (
      <I18nProvider locale="ja-jp">
        <Story />
      </I18nProvider>
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
