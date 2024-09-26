import { extendObservable, makeObservable } from 'mobx';
import { RegisterViewApiData } from './RegisterViewModelBuilder';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';

export class RegisterViewModel extends AuthorizationModel {
  dummy: string;
  constructor(apiData: RegisterViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {});
  }
}
