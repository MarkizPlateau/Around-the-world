import { IModelBuilder } from '@/model/mvvm';
import { ForgotPasswordViewModel } from './ForgotPasswordViewModel';

export type ForgotPasswordViewApiData = {
  dummy: string;
};
export class ForgotPasswordViewModelBuilder
  implements IModelBuilder<ForgotPasswordViewModel, ForgotPasswordViewApiData>
{
  build(apiData: ForgotPasswordViewApiData): ForgotPasswordViewModel {
    return new ForgotPasswordViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
