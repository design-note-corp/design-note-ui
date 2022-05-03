import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Textarea } from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "テキストを入力",
  width: 640,
  height: 96,
};
