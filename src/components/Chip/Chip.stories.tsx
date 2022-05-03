import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chip } from "./Chip";

export default {
  title: "Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Label",
};
