import { style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const className = style({
  borderRadius: 4,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: vars.color.frame,
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 16,
  paddingRight: 16,
});
