import RegisterView from '@/views/RegisterView/RegisterView';
import {
  RegisterViewApiData,
  RegisterViewModelBuilder,
} from '@/views/RegisterView/RegisterViewModelBuilder';

export default async function Page() {
  const builder = new RegisterViewModelBuilder();
  const apiData: RegisterViewApiData = await builder.loadApiData();
  return <RegisterView apiData={apiData} />;
}
