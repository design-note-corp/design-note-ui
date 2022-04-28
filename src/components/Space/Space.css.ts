import { calc } from "@vanilla-extract/css-utils";
import { createTheme, globalStyle, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  rowGap: (0).toString(),
  columnGap: (0).toString(),
});

export const className = style({
  display: "flex",
  marginTop: calc.divide(vars.rowGap, -2),
  marginBottom: calc.divide(vars.rowGap, -2),
  marginLeft: calc.divide(vars.columnGap, -2),
  marginRight: calc.divide(vars.columnGap, -2),
});

globalStyle(`${className} > *`, {
  marginTop: calc.divide(vars.rowGap, 2),
  marginBottom: calc.divide(vars.rowGap, 2),
  marginLeft: calc.divide(vars.columnGap, 2),
  marginRight: calc.divide(vars.columnGap, 2),
});
