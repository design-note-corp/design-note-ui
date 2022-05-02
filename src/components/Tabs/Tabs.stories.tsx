import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tab } from "../Tab/Tab";
import { TabList } from "../TabList";
import { TabPanel } from "../TabPanel";
import { TabPanels } from "../TabPanels";

import { Tabs } from "./Tabs";

export default {
  title: "Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  return (
    <Tabs {...args}>
      <TabList>
        <Tab>Tab A</Tab>
        <Tab>Tab B</Tab>
        <Tab>Tab C</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>TabPanel A</TabPanel>
        <TabPanel>TabPanel B</TabPanel>
        <TabPanel>TabPanel C</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
