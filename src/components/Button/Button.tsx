import { Gap, Space } from "../Space";
import { className } from "./Button.css";

type ButtonProps = React.ComponentProps<"button"> & {
  startIcon?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <button {...rest} className={className}>
      <Space columnGap={Gap.Medium} alignItems="center">
        {startIcon}
        <span>{children}</span>
      </Space>
    </button>
  );
};
