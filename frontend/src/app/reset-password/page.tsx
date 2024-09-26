import ResetPasswordView from '@/views/ResetPasswordView/ResetPasswordView';
import {
  ResetPasswordViewApiData,
  ResetPasswordViewModelBuilder,
} from '@/views/ResetPasswordView/ResetPasswordViewModelBuilder';

export default async function Page() {
  const builder = new ResetPasswordViewModelBuilder();
  const apiData: ResetPasswordViewApiData = await builder.loadApiData();
  return <ResetPasswordView apiData={apiData} />;
}
