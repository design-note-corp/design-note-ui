import { themeClass } from "../../styles";

type ThemeProviderProps = React.PropsWithChildren<{}>;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <div className={themeClass}>{children}</div>;
};
