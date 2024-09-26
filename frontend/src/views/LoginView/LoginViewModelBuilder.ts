import { IModelBuilder } from '@/model/mvvm';
import { LoginViewModel } from './LoginViewModel';

export type LoginViewApiData = {
  dummy: string;
};
export class LoginViewModelBuilder implements IModelBuilder<LoginViewModel, LoginViewApiData> {
  build(apiData: LoginViewApiData): LoginViewModel {
    return new LoginViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
