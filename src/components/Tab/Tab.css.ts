import { style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const tab = style({
  cursor: "pointer",
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 8,
  paddingRight: 8,
  transition: "all 0.5s 0s ease",
});

export const selected = style({
  fontWeight: vars.fontWeight.bold,
  boxShadow: "inset 0px -2px 0px #E94C89",
});
