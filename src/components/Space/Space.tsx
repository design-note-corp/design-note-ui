import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { className, vars } from "./Space.css";

export enum Gap {
  Small = "4px",
  Medium = "8px",
  Large = "16px",
}

type SpaceProps = React.ComponentProps<"div"> &
  Pick<
    React.CSSProperties,
    "width" | "flexWrap" | "alignItems" | "flexDirection" | "justifyContent"
  > & {
    inline?: boolean;
    gap?: Gap;
    rowGap?: Gap;
    columnGap?: Gap;
  };

export const Space: React.FC<SpaceProps> = ({
  gap,
  inline = false,
  rowGap = gap ?? (0).toString(),
  columnGap = gap ?? (0).toString(),
  width,
  children,
  flexWrap,
  alignItems,
  flexDirection,
  justifyContent,
  ...rest
}) => {
  const inlineVars = assignInlineVars({
    [vars.rowGap]: rowGap,
    [vars.columnGap]: columnGap,
  });

  return (
    <div className={rest.className}>
      <div
        {...rest}
        className={clsx(className)}
        style={{
          ...inlineVars,
          display: inline ? "inline-flex" : "flex",
          width,
          flexWrap,
          alignItems,
          flexDirection,
          justifyContent,
        }}
      >
        {children}
      </div>
    </div>
  );
};
