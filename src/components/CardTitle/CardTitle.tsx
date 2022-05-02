import { className } from "./CardTitle.css";

type CardTitleProps = React.PropsWithChildren<{}>;

export const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <div className={className}>{children}</div>;
};
