import { Avatar } from "../Avatar";
import { CommentAuthor } from "../CommentAuthor";
import { CommentContent } from "../CommentContent";
import { CommentCreatedAt } from "../CommentCreatedAt";
import { Space, Gap } from "../Space";

type CommentProps = {
  author: string;
  avatar: React.ReactNode;
  content: string;
  createdAt: string;
};

export const Comment: React.FC<CommentProps> = ({
  author,
  avatar,
  content,
  createdAt,
}) => {
  return (
    <Space rowGap={Gap.Medium} flexDirection="column">
      <Space columnGap={Gap.Medium}>
        <Avatar width={32} height={32}>
          {avatar}
        </Avatar>
        <div>
          <CommentAuthor>{author}</CommentAuthor>
          <CommentCreatedAt createdAt={createdAt} />
        </div>
      </Space>

      <CommentContent>{content}</CommentContent>
    </Space>
  );
};
