import { themeClass as defaultThemeClass } from "../../styles";

type ThemeProviderProps = React.PropsWithChildren<{
  themeClass?: string;
}>;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  themeClass = defaultThemeClass,
}) => {
  return <div className={themeClass}>{children}</div>;
};
