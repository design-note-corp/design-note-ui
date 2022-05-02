import { useContext } from "react";
import { TabsDispatchContext } from "../contexts/TabsDispatchContext";

export const useTabsDispatchContext = () => {
  const context = useContext(TabsDispatchContext);

  if (context === null) throw new TypeError("context is null");

  return context;
};
