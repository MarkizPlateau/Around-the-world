import { IModelBuilder } from '@/model/mvvm';
import { AccountConfirmationViewModel } from './AccountConfirmationViewModel';

export type AccountConfirmationViewApiData = {
  dummy: string;
};
export class AccountConfirmationViewModelBuilder
  implements IModelBuilder<AccountConfirmationViewModel, AccountConfirmationViewApiData>
{
  build(apiData: AccountConfirmationViewApiData): AccountConfirmationViewModel {
    return new AccountConfirmationViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
