import { style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const className = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "50%",
  backgroundColor: vars.color.frame,
});
