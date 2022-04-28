import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Space, Gap as GapEnum } from "./Space";

export default {
  title: "Space",
  component: Space,
} as ComponentMeta<typeof Space>;

export const Gap: ComponentStory<typeof Space> = (args) => (
  <Space {...args} width={400} gap={GapEnum.Medium} flexWrap="wrap">
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
  </Space>
);

export const ColumnGap: ComponentStory<typeof Space> = (args) => (
  <Space {...args} columnGap={GapEnum.Medium}>
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
  </Space>
);

export const RowGap: ComponentStory<typeof Space> = (args) => (
  <Space {...args} flexDirection="column" rowGap={GapEnum.Medium}>
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
  </Space>
);
