import clsx from "clsx";
import * as styles from "./Tab.css";
import { useTabsDispatchContext } from "../../hooks/useTabsDispatchContext";
import { useTabsStateContext } from "../../hooks/useTabsStateContext";

export type TabProps = React.PropsWithChildren<{
  index?: number;
}>;

export const Tab: React.FC<TabProps> = ({ children, index = 0 }) => {
  const { currentIndex } = useTabsStateContext();
  const isSelected = currentIndex === index;

  const { setCurrentIndex } = useTabsDispatchContext();
  const handleClick = () => setCurrentIndex(index);

  return (
    <div
      className={clsx(styles.tab, isSelected && styles.selected)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
