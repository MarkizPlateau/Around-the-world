import { ResetPasswordViewApiData } from './ResetPasswordViewModelBuilder';
import { AuthorizationModel } from '@/model/interfaces/AuthorizationModel';

export class ResetPasswordViewModel extends AuthorizationModel {
  constructor(apiData: ResetPasswordViewApiData) {
    super({ resetPasswordCode: apiData.resetPasswordCode });
  }
}
