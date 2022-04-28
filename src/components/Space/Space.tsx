import { assignInlineVars } from "@vanilla-extract/dynamic";
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
    wrap?: boolean;
    gap?: Gap;
    rowGap?: Gap;
    columnGap?: Gap;
  };

export const Space: React.FC<SpaceProps> = ({
  children,
  gap,
  rowGap = gap ?? (0).toString(),
  columnGap = gap ?? (0).toString(),
  width,
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
    <div>
      <div
        {...rest}
        className={className}
        style={{
          ...inlineVars,
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
