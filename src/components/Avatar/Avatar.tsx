import { className } from "./Avatar.css";

type AvatarProps = React.PropsWithChildren<{
  width: number;
  height: number;
}>;

export const Avatar: React.FC<AvatarProps> = ({
  children,
  width = 40,
  height = 40,
}) => {
  return (
    <div className={className} style={{ width, height }}>
      {children}
    </div>
  );
};
