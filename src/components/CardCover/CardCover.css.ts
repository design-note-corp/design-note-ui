import { style } from "@vanilla-extract/css";

export const className = style({
  overflow: "hidden",
  width: 120,
  height: 120,
  borderRadius: 16,

  "@media": {
    "screen and (max-width: 599px)": {
      width: 80,
      height: 80,
    },
  },
});
