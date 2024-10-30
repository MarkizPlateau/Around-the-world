import { IModelBuilder } from '@/model/mvvm';
import { ForgotPasswordViewModel } from './ForgotPasswordViewModel';

export type ForgotPasswordViewApiData = {};
export class ForgotPasswordViewModelBuilder
  implements IModelBuilder<ForgotPasswordViewModel, ForgotPasswordViewApiData>
{
  build(apiData: ForgotPasswordViewApiData): ForgotPasswordViewModel {
    return new ForgotPasswordViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {};

    return apiData;
  }
}
