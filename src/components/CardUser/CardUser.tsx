import { Avatar } from "../Avatar";
import { Gap, Space } from "../Space";
import { className } from "./CardUser.css";

type CardUserProps = {
  avatar: React.ReactNode;
  author: string;
};

export const CardUser: React.FC<CardUserProps> = ({ avatar, author }) => {
  return (
    <Space columnGap={Gap.Small} alignItems="center">
      <Avatar width={16} height={16}>
        {avatar}
      </Avatar>
      <div>{author}</div>
    </Space>
  );
};
