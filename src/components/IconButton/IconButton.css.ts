import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const className = style({
  border: "none",
  padding: 12,
  backgroundColor: "transparent",

  ":active": {
    borderRadius: "50%",
    backgroundColor: vars.color.backgroundHover,
  },
});
