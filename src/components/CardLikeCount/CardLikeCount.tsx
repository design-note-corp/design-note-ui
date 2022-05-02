import { vars } from "../../styles";
import { Favorite } from "../Icons";
import { Gap, Space } from "../Space";

type CardLikeCountProps = {
  likeCount: number;
};

export const CardLikeCount: React.FC<CardLikeCountProps> = ({ likeCount }) => {
  return (
    <Space columnGap={Gap.Small} alignItems="center">
      <Favorite color={vars.color.primary} />
      <span>{likeCount}</span>
    </Space>
  );
};
