import clsx from "clsx";
import React from "react";
import { className } from "./Textarea.css";

type TextareaProps = React.ComponentProps<"textarea"> &
  Pick<React.CSSProperties, "width" | "height" | "resize">;

export const Textarea: React.FC<TextareaProps> = ({
  width,
  height,
  resize,
  ...rest
}) => {
  return (
    <textarea
      {...rest}
      style={{ width, height, resize }}
      className={clsx(className, rest.className)}
    />
  );
};
