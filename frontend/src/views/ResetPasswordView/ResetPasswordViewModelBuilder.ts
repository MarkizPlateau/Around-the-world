import { IModelBuilder } from '@/model/mvvm';
import { ResetPasswordViewModel } from './ResetPasswordViewModel';

export type ResetPasswordViewApiData = {
  dummy: string;
};
export class ResetPasswordViewModelBuilder
  implements IModelBuilder<ResetPasswordViewModel, ResetPasswordViewApiData>
{
  build(apiData: ResetPasswordViewApiData): ResetPasswordViewModel {
    return new ResetPasswordViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
