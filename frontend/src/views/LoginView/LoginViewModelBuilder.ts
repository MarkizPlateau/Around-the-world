import { IModelBuilder } from '@/model/mvvm';
import { LoginViewModel } from './LoginViewModel';

export type LoginViewApiData = {};
export class LoginViewModelBuilder implements IModelBuilder<LoginViewModel, LoginViewApiData> {
  build(): LoginViewModel {
    return new LoginViewModel();
  }

  async loadApiData() {
    const apiData = {};

    return apiData;
  }
}
