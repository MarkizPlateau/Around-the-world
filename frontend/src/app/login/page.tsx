import LoginView from '@/views/LoginView/LoginView';
import { LoginViewApiData, LoginViewModelBuilder } from '@/views/LoginView/LoginViewModelBuilder';

export default async function Page() {
  const builder = new LoginViewModelBuilder();
  const apiData: LoginViewApiData = await builder.loadApiData();
  return <LoginView apiData={apiData} />;
}
