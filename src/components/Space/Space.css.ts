import { createTheme, globalStyle, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  rowGap: (0).toString(),
  columnGap: (0).toString(),
});

export const className = style({
  display: "flex",
  width: "100%",
  height: "100%",
});

globalStyle(`${className} > *:not(:last-child)`, {
  marginBottom: vars.rowGap,
  marginRight: vars.columnGap,
});
