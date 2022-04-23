import Image from "next/image";
import { staticPath } from "../../lib/$path";

const ICON_SIZES = [16, 24] as const;
type Size = typeof ICON_SIZES[number];

type Key = keyof typeof staticPath.icons;
type Variant = Key extends `${infer U}_svg` ? U : never;

type IconProps = {
  size?: Size;
  variant: Variant;
};

const Icon: React.FC<IconProps> = ({ size = 24, variant }) => {
  return (
    <Image
      src={staticPath.icons[`${variant}_svg`]}
      width={size}
      height={size}
    />
  );
};

export type { IconProps };
export { ICON_SIZES, Icon };
