import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "./Icon";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const Add = Template.bind({});
Add.args = {
  variant: "add",
};

export const Bell = Template.bind({});
Bell.args = {
  variant: "bell",
};

export const Edit = Template.bind({});
Edit.args = {
  variant: "edit",
};

export const Favorite = Template.bind({});
Favorite.args = {
  variant: "favorite",
};

export const Search = Template.bind({});
Search.args = {
  variant: "search",
};
