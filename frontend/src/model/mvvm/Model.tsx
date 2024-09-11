import { action, makeObservable, observable } from 'mobx';

export abstract class Model {
  isApiDataLoading = false;
  // IDEA
  // abstract setApiData(apiData: { [key: string]: any }): void;
  constructor() {
    makeObservable(this, {
      isApiDataLoading: observable,
      setIsLoading: action.bound,
    });
  }
  setIsLoading(isLoading: boolean) {
    this.isApiDataLoading = isLoading;
  }
}
