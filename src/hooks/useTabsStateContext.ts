import { useContext } from "react";
import { TabsStateContext } from "../contexts/TabsStateContext";

export const useTabsStateContext = () => {
  const context = useContext(TabsStateContext);

  if (context === null) throw new TypeError("context is null");

  return context;
};
