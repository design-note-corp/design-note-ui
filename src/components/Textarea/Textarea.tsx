import clsx from "clsx";
import React from "react";
import { className } from "./Textarea.css";

type TextareaProps = React.ComponentProps<"textarea"> &
  Pick<React.CSSProperties, "width" | "height">;

export const Textarea: React.FC<TextareaProps> = ({
  width,
  height,
  ...rest
}) => {
  return (
    <textarea
      {...rest}
      style={{ width, height }}
      className={clsx(className, rest.className)}
    />
  );
};
