import { createContext, useContext } from "react";
import { CounterStore } from "./counter-store";

export class RootStore {
  counterStore: CounterStore;
  constructor() {
    this.counterStore = new CounterStore(this);
  }
}

export const storeContext = createContext(new RootStore());

export function useStores() {
  return useContext(storeContext);
}
