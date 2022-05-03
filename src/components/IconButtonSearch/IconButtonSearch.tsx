import { vars } from "../../styles";
import { Search } from "../Icons";
import { IconButton } from "../IconButton/IconButton";
import type { IconButtonProps } from "../IconButton/IconButton";

type IconButtonSearchProps = IconButtonProps;

export const IconButtonSearch: React.FC<IconButtonSearchProps> = (props) => {
  return (
    <IconButton {...props}>
      <Search width={24} height={24} display="block" color={vars.color.light} />
    </IconButton>
  );
};
