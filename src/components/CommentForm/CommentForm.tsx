import { Avatar } from "../Avatar";
import { Button } from "../Button";
import SvgEdit from "../Icons/Edit";
import { Gap, Space } from "../Space";
import { Textarea } from "../Textarea";
import { Title } from "../Title";

type CommentFormProps = {
  avatar: React.ReactNode;
};

export const CommentForm: React.FC<CommentFormProps> = ({ avatar }) => {
  return (
    <Space rowGap={Gap.Medium} flexDirection="column">
      <Space columnGap={Gap.Medium} alignItems="center">
        <Avatar width={32} height={32}>
          {avatar}
        </Avatar>
        <Title level={4}>コメントする</Title>
      </Space>

      <Textarea placeholder="テキストを入力" height={96} resize="none" />

      <Space justifyContent="flex-end">
        <Button startIcon={<SvgEdit />}>送信</Button>
      </Space>
    </Space>
  );
};
