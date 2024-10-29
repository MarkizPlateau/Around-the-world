import { extendObservable, makeObservable, observable, reaction } from 'mobx';
import { LoginViewApiData } from './LoginViewModelBuilder';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';
import { ROUTES } from '@/constants/routes';

export class LoginViewModel extends AuthorizationModel {
  dummy: string;
  previousRoute: string = ROUTES.HOME;
  constructor(apiData: LoginViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {
      previousRoute: observable,
    });
    // TODO
    // Redirect in NextAuthOptions and callbackUrl in signIn do not work properly,
    // so I temporarily use this solution
    reaction(
      () => this.successfulLogin,
      (successfulLogin) => {
        if (successfulLogin) {
          const redirectUrl = this.previousRoute;
          window.location.href = redirectUrl;
        }
      },
    );
  }
  setPreviousRoute(route: string) {
    this.previousRoute = route;
  }
}
