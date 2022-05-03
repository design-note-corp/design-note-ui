import { Gap, Space } from "../Space";
import { CardContent } from "../CardContent";
import { CardCover } from "../CardCover";
import { CardTitle } from "../CardTitle";
import { CardChips } from "../CardChips";
import { CardDescription } from "../CardDescription";

export type CardProps = {
  cover: React.ReactNode;
  title: string;
  chips?: string[];
  avatar: React.ReactNode;
  author: string;
  createdAt: string;
  likeCount: number;
};

export const Card: React.FC<CardProps> = ({
  cover,
  title,
  chips = [],
  avatar,
  author,
  createdAt,
  likeCount,
}) => {
  return (
    <Space columnGap={Gap.Large}>
      <CardCover>{cover}</CardCover>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardChips labels={chips} />
        <CardDescription
          avatar={avatar}
          author={author}
          createdAt={createdAt}
          likeCount={likeCount}
        />
      </CardContent>
    </Space>
  );
};
