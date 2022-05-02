import { useTabsStateContext } from "../../hooks/useTabsStateContext";

export type TabPanelProps = React.PropsWithChildren<{
  index?: number;
}>;

export const TabPanel: React.FC<TabPanelProps> = ({ children, index = 0 }) => {
  const { currentIndex } = useTabsStateContext();
  const isSelected = currentIndex === index;

  return (
    <div style={{ display: isSelected ? undefined : "none" }}>{children}</div>
  );
};
