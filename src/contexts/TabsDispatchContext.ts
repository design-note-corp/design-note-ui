import React, { createContext } from "react";

export type TabsDispatchContextValue = {
  setCurrentIndex: (index: number) => void;
};

export const TabsDispatchContext =
  createContext<TabsDispatchContextValue | null>(null);
