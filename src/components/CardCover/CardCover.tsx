import { className } from "./CardCover.css";

type CardCoverProps = React.PropsWithChildren<{}>;

export const CardCover: React.FC<CardCoverProps> = ({ children }) => {
  return <div className={className}>{children}</div>;
};
