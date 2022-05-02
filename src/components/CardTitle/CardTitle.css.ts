import { style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const className = style({
  fontSize: vars.fontSizes.medium,
  fontWeight: vars.fontWeight.bold,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,

  "@media": {
    "screen and (max-width: 599px)": {
      WebkitLineClamp: 2,
    },
  },
});
