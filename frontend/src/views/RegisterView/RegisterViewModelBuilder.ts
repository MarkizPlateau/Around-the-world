import { IModelBuilder } from '@/model/mvvm';
import { RegisterViewModel } from './RegisterViewModel';

export type RegisterViewApiData = {
  dummy: string;
};
export class RegisterViewModelBuilder
  implements IModelBuilder<RegisterViewModel, RegisterViewApiData>
{
  build(apiData: RegisterViewApiData): RegisterViewModel {
    return new RegisterViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
