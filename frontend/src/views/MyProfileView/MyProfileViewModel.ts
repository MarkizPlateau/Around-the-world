import { extendObservable, makeObservable, runInAction } from 'mobx';
import { useClientWithGetSession } from '@/apollo/client';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';
import { Command } from '@/model/mvvm';
import { MyProfileViewApiData } from './MyProfileViewModelBuilder';
import { updateUser } from '@/calls/userData';

export class MyProfileViewModel extends AuthorizationModel {
  userData: USER_DATA;
  updateUser: Command<void, any>;
  constructor(apiData: MyProfileViewApiData) {
    super();
    this.userData = apiData.userData;
    this.email = apiData.userData.email;
    extendObservable(this, {
      userData: this.userData,
    });

    makeObservable(this, {});
    this.updateUser = new Command(
      async () => {
        this.setDefault();
        this.setIsLoading(true);
        const dataToUpdate = Object.fromEntries(
          Object.entries({
            username: this.userData.username,
            email: this.email,
            password: this.password,
          }).filter(([_, value]) => value),
        );

        const client = await useClientWithGetSession();
        updateUser(client, { id: this.userData.id, userData: dataToUpdate })
          .then(() => {
            runInAction(() => {
              this.successfulSendForm = true;
            });
          })
          .catch((e) => {
            this.setServerErrors(e.message);
          })
          .finally(() => {
            this.setIsLoading(false);
            console.log('Update user data attempt completed');
          });
      },
      () =>
        (this.userData.username || this.isEmailCorrect) &&
        ((this.isPasswordCorrect && this.isConfirmPasswordCorrect) ||
          (!this.password && !this.passwordConfirmation)),
    );
  }
}
