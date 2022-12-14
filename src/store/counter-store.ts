import { makeAutoObservable } from "mobx";
import { RootStore } from "./root-store";

export class CounterStore {
  rootStore: RootStore;

  count: number = 0;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  increment() {
    this.count++;
  }
}
