import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const className = style({
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  height: 48,
  padding: 16,
  fontSize: vars.fontSizes.medium,
  borderRadius: 8,
  color: vars.color.white,
  backgroundColor: vars.color.primary,

  ":hover": {
    backgroundColor: vars.color.primaryLight,
  },
});
