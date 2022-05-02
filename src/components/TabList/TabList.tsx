import { cloneElement } from "react";
import { Gap, Space } from "../Space";
import type { TabProps } from "../Tab/Tab";
import { className } from "./TabList.css";

type TabListProps = {
  children: React.ReactElement[];
};

export const TabList: React.FC<TabListProps> = ({ children }) => {
  const childrenWithIndex = children.map((child, index) =>
    cloneElement<TabProps>(child, { index })
  );

  return (
    <Space className={className} columnGap={Gap.Large}>
      {childrenWithIndex}
    </Space>
  );
};
