import { className } from "./Avatar.css";
import Image, { ImageProps } from "next/image";

type AvatarProps = ImageProps;

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <Image {...props} className={className} />;
};
