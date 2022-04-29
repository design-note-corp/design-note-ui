import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Space, Gap as GapEnum } from "./Space";

export default {
  title: "Space",
  component: Space,
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => {
  return <Space {...args} />;
};

export const Gap = Template.bind({});
Gap.args = {
  width: 400,
  gap: GapEnum.Medium,
  flexWrap: "wrap",
  children: (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    </>
  ),
};

export const RowGap = Template.bind({});
RowGap.args = {
  rowGap: GapEnum.Medium,
  flexDirection: "column",
  children: (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    </>
  ),
};

export const ColumnGap = Template.bind({});
ColumnGap.args = {
  columnGap: GapEnum.Medium,
  children: (
    <>
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
    </>
  ),
};
