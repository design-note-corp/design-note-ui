import { className } from "./Header.css";

type HeaderProps = React.PropsWithChildren<{}>;

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className={className}>{children}</header>;
};
