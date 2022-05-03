import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommentForm } from "./CommentForm";

export default {
  title: "CommentForm",
  component: CommentForm,
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => {
  return <CommentForm {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  avatar: (
    <img src="https://placehold.jp/40x40.png" width="100%" height="100%" />
  ),
};
