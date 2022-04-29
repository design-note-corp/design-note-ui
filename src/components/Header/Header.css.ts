import { style } from "@vanilla-extract/css";

export const className = style({
  "@media": {
    "screen and (max-width: 599px)": {
      padding: 16,
    },
    "screen and (min-width: 600px)": {
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: 32,
      paddingRight: 32,
    },
  },
});
