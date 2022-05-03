import dayjs from "dayjs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Comment } from "./Comment";

export default {
  title: "Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => {
  return <Comment {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  author: "Taro Yamada",
  avatar: (
    <img src="https://placehold.jp/40x40.png" width="100%" height="100%" />
  ),
  content:
    "長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト",
  createdAt: dayjs().subtract(2, "day").format(),
};
