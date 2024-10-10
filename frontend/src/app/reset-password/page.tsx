import { PageContext } from '@/model/mvvm';
import ResetPasswordView from '@/views/ResetPasswordView/ResetPasswordView';
import {
  ResetPasswordViewApiData,
  ResetPasswordViewModelBuilder,
} from '@/views/ResetPasswordView/ResetPasswordViewModelBuilder';

export default async function Page(context: PageContext) {
  const builder = new ResetPasswordViewModelBuilder();
  const apiData: ResetPasswordViewApiData = await builder.loadApiData(context);
  return <ResetPasswordView apiData={apiData} />;
}
