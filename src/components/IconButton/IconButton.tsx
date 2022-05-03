import { className } from "./IconButton.css";

export type IconButtonProps = React.ComponentProps<"button">;

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
