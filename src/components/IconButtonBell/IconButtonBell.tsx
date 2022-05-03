import { vars } from "../../styles";
import SvgBell from "../Icons/Bell";
import { IconButton } from "../IconButton/IconButton";
import type { IconButtonProps } from "../IconButton/IconButton";

type IconButtonBellProps = IconButtonProps;

export const IconButtonBell: React.FC<IconButtonBellProps> = (props) => {
  return (
    <IconButton>
      <SvgBell
        width={24}
        height={24}
        display="block"
        color={vars.color.light}
      />
    </IconButton>
  );
};
