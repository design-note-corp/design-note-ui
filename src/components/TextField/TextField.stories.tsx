import { ComponentStory, ComponentMeta } from "@storybook/react";
import { vars } from "../../styles/theme.css";
import { IconButton } from "../IconButton";
import { Search } from "../Icons";

import { TextField } from "./TextField";

export default {
  title: "TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithSearchIcon = Template.bind({});
WithSearchIcon.args = {
  placeholder: "キーワードで検索",
  suffix: (
    <IconButton>
      <Search width={24} height={24} display="block" color={vars.color.light} />
    </IconButton>
  ),
};
