import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    backgroundHover: "#eeeeee",
    dark: "#212121",
    frame: "#cccccc",
    light: "#616161",
    medium: "#424242",
    primary: "#e94c89",
    primaryDark: "#ba1756",
    white: "#ffffff",
  },
  fontSizes: {
    xLarge: "32px",
    large: "24px",
    medium: "16px",
    small: "14px",
    xSmall: "12px",
  },
  fontWeight: {
    bold: "bold",
    normal: "normal",
  },
});
