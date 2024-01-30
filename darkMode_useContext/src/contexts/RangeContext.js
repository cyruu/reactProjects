import { createContext, useContext } from "react";

export const RangeContext = createContext();

export const RangeProvider = RangeContext.Provider;

export default function useRangeContext() {
  return useContext(RangeContext);
}
