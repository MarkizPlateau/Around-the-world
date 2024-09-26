import ForgotPasswordView from '@/views/ForgotPasswordView/ForgotPasswordView';
import {
  ForgotPasswordViewApiData,
  ForgotPasswordViewModelBuilder,
} from '@/views/ForgotPasswordView/ForgotPasswordViewModelBuilder';

export default async function Page() {
  const builder = new ForgotPasswordViewModelBuilder();
  const apiData: ForgotPasswordViewApiData = await builder.loadApiData();
  return <ForgotPasswordView apiData={apiData} />;
}
