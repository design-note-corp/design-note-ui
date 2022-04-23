import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "../Icon";
import { IconButton } from "./IconButton";

export default {
  title: "IconButton",
  component: IconButton,
  subcomponents: { Icon },
} as ComponentMeta<typeof IconButton>;

export const Bell: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Icon variant="bell" />
  </IconButton>
);
