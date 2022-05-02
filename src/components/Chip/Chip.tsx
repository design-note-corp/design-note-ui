import { className } from "./Chip.css";

type ChipProps = React.PropsWithChildren<{}>;

export const Chip: React.FC<ChipProps> = ({ children }) => {
  return <span className={className}>{children}</span>;
};
