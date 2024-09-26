import { extendObservable, makeObservable } from 'mobx';
import { LoginViewApiData } from './LoginViewModelBuilder';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';

export class LoginViewModel extends AuthorizationModel {
  dummy: string;
  constructor(apiData: LoginViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {});
  }
}
