import { className } from "./Chip.css";

type ChipProps = {};

export const Chip: React.FC<ChipProps> = (props) => {
  return <span className={className}>Chip</span>;
};
