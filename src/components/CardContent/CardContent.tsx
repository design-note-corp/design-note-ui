import { Gap, Space } from "../Space";
import { className } from "./CardContent.css";

type CardContentProps = React.PropsWithChildren<{}>;

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <Space className={className} flexDirection="column" rowGap={Gap.Medium}>
      {children}
    </Space>
  );
};
