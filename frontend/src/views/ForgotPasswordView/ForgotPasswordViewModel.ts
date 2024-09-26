import { extendObservable, makeObservable } from 'mobx';
import { ForgotPasswordViewApiData } from './ForgotPasswordViewModelBuilder';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';

export class ForgotPasswordViewModel extends AuthorizationModel {
  dummy: string;
  constructor(apiData: ForgotPasswordViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {});
  }
}
