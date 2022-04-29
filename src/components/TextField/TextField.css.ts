import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  height: 48,
  paddingLeft: 16,
  paddingRight: 16,
  borderRadius: 12,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: vars.color.frame,
  boxSizing: "border-box",
});

export const withSuffix = style({
  paddingRight: 0,
});

export const input = style({
  flex: 1,
  padding: 0,
  border: "none",
  outline: "none",
});
