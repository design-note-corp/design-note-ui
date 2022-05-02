import { style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const className = style({
  fontSize: vars.fontSizes.xSmall,
  color: vars.color.dark,
  backgroundColor: "#f2f2f2",
  borderRadius: 10,
  paddingTop: 2,
  paddingBottom: 2,
  paddingLeft: 8,
  paddingRight: 8,
});
