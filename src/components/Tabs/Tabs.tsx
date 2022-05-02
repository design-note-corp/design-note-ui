import { TabsProvider } from "../../providers/TabsProvider";

type TabsProps = React.PropsWithChildren<{
  defaultIndex?: number;
}>;

export const Tabs: React.FC<TabsProps> = ({ children, defaultIndex = 0 }) => {
  return <TabsProvider defaultIndex={defaultIndex}>{children}</TabsProvider>;
};
