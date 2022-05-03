import { className } from "./CardDescription.css";
import { CardCreatedAt } from "../CardCreatedAt";
import { CardLikeCount } from "../CardLikeCount";
import { CardUser } from "../CardUser";
import { Gap, Space } from "../Space";

type CardDescriptionProps = {
  avatar: React.ReactNode;
  author: string;
  createdAt: string;
  likeCount: number;
};

export const CardDescription: React.FC<CardDescriptionProps> = ({
  avatar,
  author,
  createdAt,
  likeCount,
}) => {
  return (
    <Space className={className} columnGap={Gap.Large} alignItems="center">
      <CardUser avatar={avatar} author={author} />
      <CardCreatedAt createdAt={createdAt} />
      <CardLikeCount likeCount={likeCount} />
    </Space>
  );
};
