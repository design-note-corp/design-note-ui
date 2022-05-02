import { cloneElement } from "react";
import type { TabPanelProps } from "../TabPanel/TabPanel";
import { className } from "./TabPanels.css";

type TabPanelsProps = {
  children: React.ReactElement[];
};

export const TabPanels: React.FC<TabPanelsProps> = ({ children }) => {
  const childrenWithIndex = children.map((child, index) =>
    cloneElement<TabPanelProps>(child, { index })
  );

  return <div className={className}>{childrenWithIndex}</div>;
};
