import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Bell as SvgBell } from "../Icons";
import { IconButton } from "./IconButton";

export default {
  title: "IconButton",
  component: IconButton,
  subcomponents: { SvgBell },
} as ComponentMeta<typeof IconButton>;

export const Bell: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <SvgBell width={16} height={16} />
  </IconButton>
);
