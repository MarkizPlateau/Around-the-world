import { makeObservable } from 'mobx';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';

export class NewsViewModel extends AuthorizationModel {
  constructor(apiData: {}) {
    super();
    makeObservable(this, {});
  }
}
