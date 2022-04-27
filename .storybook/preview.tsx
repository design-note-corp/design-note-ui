import React from "react";
import { themeClass } from "../src/styles/theme.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={themeClass}>
      <Story />
    </div>
  ),
];
