import dayjs from "dayjs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

export const Basic = Template.bind({});

Basic.args = {
  cover: (
    <img src="https://placehold.jp/120x120.png" width="100%" height="100%" />
  ),
  title:
    "長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル長いタイトル",
  chips: ["Label A", "Label B", "Label C"],
  avatar: (
    <img src="https://placehold.jp/16x16.png" width="100%" height="100%" />
  ),
  nickname: "Taro Yamada",
  createdAt: dayjs().subtract(2, "day").format(),
  likeCount: 130,
};

Basic.parameters = {
  chromatic: {
    viewports: [320, 600, 905],
  },
};
