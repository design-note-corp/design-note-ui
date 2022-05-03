import { useState } from "react";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import SvgEdit from "../Icons/Edit";
import { Gap, Space } from "../Space";
import { Textarea } from "../Textarea";
import { Title } from "../Title";

type CommentFormProps = {
  avatar: React.ReactNode;
  onSubmit: (value: string) => void;
};

export const CommentForm: React.FC<CommentFormProps> = ({
  avatar,
  onSubmit,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Space rowGap={Gap.Medium} flexDirection="column">
        <Space columnGap={Gap.Medium} alignItems="center">
          <Avatar width={32} height={32}>
            {avatar}
          </Avatar>
          <Title level={4}>コメントする</Title>
        </Space>

        <Textarea
          value={value}
          placeholder="テキストを入力"
          height={96}
          resize="none"
          onChange={handleChange}
        />

        <Space justifyContent="flex-end">
          {/* TODO: valueが空文字列のとき、Buttonをdisabledにする */}
          <Button type="submit" startIcon={<SvgEdit />}>
            送信
          </Button>
        </Space>
      </Space>
    </form>
  );
};
