import { extendObservable, makeObservable } from 'mobx';
import { ResetPasswordViewApiData } from './ResetPasswordViewModelBuilder';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';

export class ResetPasswordViewModel extends AuthorizationModel {
  dummy: string;
  constructor(apiData: ResetPasswordViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {});
  }
}
