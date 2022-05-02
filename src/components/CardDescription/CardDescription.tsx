import { className } from "./CardDescription.css";
import { CardCreatedAt } from "../CardCreatedAt";
import { CardLikeCount } from "../CardLikeCount";
import { CardUser } from "../CardUser";
import { Gap, Space } from "../Space";

type CardDescriptionProps = {
  avatar: React.ReactNode;
  nickname: string;
  createdAt: string;
  likeCount: number;
};

export const CardDescription: React.FC<CardDescriptionProps> = ({
  avatar,
  nickname,
  createdAt,
  likeCount,
}) => {
  return (
    <Space className={className} columnGap={Gap.Large} alignItems="center">
      <CardUser avatar={avatar} nickname={nickname} />
      <CardCreatedAt createdAt={createdAt} />
      <CardLikeCount likeCount={likeCount} />
    </Space>
  );
};
