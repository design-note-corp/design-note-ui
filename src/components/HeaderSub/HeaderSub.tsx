import { Gap, Space } from "../Space";

type HeaderSubProps = React.PropsWithChildren<{}>;

export const HeaderSub: React.FC<HeaderSubProps> = ({ children }) => {
  return (
    <Space columnGap={Gap.Medium} alignItems="center">
      {children}
    </Space>
  );
};
