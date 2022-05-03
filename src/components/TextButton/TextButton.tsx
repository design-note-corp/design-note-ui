import clsx from "clsx";
import { className } from "./TextButton.css";

type TextButtonProps = React.ComponentProps<"button"> &
  Pick<React.CSSProperties, "color">;

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  color,
  ...rest
}) => {
  return (
    <button
      {...rest}
      style={{ color }}
      className={clsx(className, rest.className)}
    >
      {children}
    </button>
  );
};
