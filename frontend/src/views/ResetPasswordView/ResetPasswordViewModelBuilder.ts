import { IModelBuilder, PageContext } from '@/model/mvvm';
import { ResetPasswordViewModel } from './ResetPasswordViewModel';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
export type ResetPasswordViewApiData = {
  resetPasswordCode: string | undefined;
};
export class ResetPasswordViewModelBuilder
  implements IModelBuilder<ResetPasswordViewModel, ResetPasswordViewApiData>
{
  build(apiData: ResetPasswordViewApiData): ResetPasswordViewModel {
    return new ResetPasswordViewModel(apiData);
  }

  async loadApiData(context: PageContext) {
    const resetPasswordCode = context.searchParams['code'];
    if (!resetPasswordCode) {
      redirect(ROUTES.HOME);
    }
    const apiData = {
      resetPasswordCode,
    };

    return apiData;
  }
}
