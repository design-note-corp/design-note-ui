import { createContext } from "react";

export type TabsStateContextValue = {
  currentIndex: number;
};

export const TabsStateContext =
  createContext<TabsStateContextValue | null>(null);
