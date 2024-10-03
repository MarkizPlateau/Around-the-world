import { extendObservable, makeObservable } from 'mobx';
import { AccountConfirmationViewApiData } from './AccountConfirmationViewModelBuilder';
import { Model } from '@/model/mvvm';

export class AccountConfirmationViewModel extends Model {
  dummy: string;
  constructor(apiData: AccountConfirmationViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {});
  }
}
