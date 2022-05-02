import { useState } from "react";
import { TabsStateContext } from "../contexts/TabsStateContext";
import { TabsDispatchContext } from "../contexts/TabsDispatchContext";

type TabsProviderProps = React.PropsWithChildren<{
  defaultIndex?: number;
}>;

export const TabsProvider: React.FC<TabsProviderProps> = ({
  children,
  defaultIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  return (
    <TabsStateContext.Provider value={{ currentIndex }}>
      <TabsDispatchContext.Provider value={{ setCurrentIndex }}>
        {children}
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
};
