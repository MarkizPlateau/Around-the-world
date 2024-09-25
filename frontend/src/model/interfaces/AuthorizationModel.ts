import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { Command, Model } from '../mvvm';
import { signIn, SignInResponse } from 'next-auth/react';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/utils/helpers';
import { forgotPassword, registerUser, resetPassword } from '@/app/calls/auth';

export class AuthorizationModel extends Model {
  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';
  newPassword: string = '';

  resetPasswordCode?: string = '';

  login: Command<void, any>;
  register: Command<void, any>;
  sendResetPasswordCode: Command<void, any>;
  resetPassword: Command<void, any>;

  serverErrors: string = '';
  isLoading: boolean = false;
  showErrors: boolean = true;

  successfulLogin: boolean = false;
  successfulSendForm: boolean = false;

  constructor({ resetPasswordCode }: { resetPasswordCode?: string }) {
    super();
    this.resetPasswordCode = resetPasswordCode;
    makeObservable(this, {
      username: observable,
      email: observable,
      password: observable,
      passwordConfirmation: observable,
      newPassword: observable,

      serverErrors: observable,
      isLoading: observable,
      showErrors: observable,

      trimEmail: computed,
      isEmailCorrect: computed,
      isPasswordCorrect: computed,
      isConfirmPasswordCorrect: computed,

      setServerErrors: action.bound,
      setDefault: action.bound,
      setLoading: action.bound,
    });
    this.login = new Command(
      async () => {
        this.setDefault();
        this.setIsLoading(true);

        const response = (await signIn('credentials', {
          username: this.email,
          password: this.password,
        })) as unknown as SignInResponse;
        if (response?.error) {
          this.setServerErrors(response.error);
          this.setIsLoading(false);
        } else {
          runInAction(() => {
            this.isLoading = false;
            this.successfulLogin = true;
          });
        }
      },
      () => this.isEmailCorrect && this.password.length > 0,
    );

    this.register = new Command(
      async () => {
        this.setDefault();
        this.setIsLoading(true);
        registerUser({ username: this.username, email: this.email, password: this.password })
          .then(() => {
            runInAction(() => {
              this.successfulSendForm = true;
            });
          })
          .catch((e) => {
            this.setServerErrors('');
          })
          .finally(() => {
            this.setIsLoading(false);
            console.log('Registration attempt completed');
          });
      },
      () => this.isPasswordCorrect && this.isConfirmPasswordCorrect && this.isEmailCorrect,
    );

    this.sendResetPasswordCode = new Command(
      async () => {
        this.setDefault();
        this.setIsLoading(true);
        forgotPassword({ email: this.trimEmail })
          .then((e) => {
            runInAction(() => {
              this.successfulSendForm = true;
            });
          })
          .catch((e) => {
            this.setServerErrors(e.message);
          })
          .finally(() => {
            this.isLoading = false;
            console.log('Attempt to send password reset code completed');
          });
      },
      () => this.isEmailCorrect,
    );

    this.resetPassword = new Command(
      async () => {
        this.setDefault();
        this.setIsLoading(true);
        if (this.resetPasswordCode) {
          resetPassword({
            password: this.password,
            passwordConfirmation: this.passwordConfirmation,
            code: this.resetPasswordCode,
          })
            .then((e: any) => {
              runInAction(() => {
                this.successfulSendForm = true;
              });
            })
            .catch((e: ErrorEvent) => {
              if (e.message === 'Incorrect code provided') {
                this.setServerErrors('');
              } else {
                this.setServerErrors(e.message);
              }
            })
            .finally(() => {
              this.setIsLoading(false);
            });
        }
      },
      () => this.isPasswordCorrect && this.isConfirmPasswordCorrect,
    );
  }

  get trimEmail() {
    return this.email.trim();
  }

  get isEmailCorrect() {
    return EMAIL_REGEX.test(this.email);
  }

  get isPasswordCorrect() {
    return PASSWORD_REGEX.test(this.password);
  }

  get isConfirmPasswordCorrect() {
    if (this.password && this.passwordConfirmation) {
      return this.password === this.passwordConfirmation;
    }
  }

  setServerErrors(error: string) {
    this.serverErrors = error;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setDefault() {
    this.serverErrors = '';
    this.successfulLogin = false;
    this.successfulSendForm = false;
  }
}
