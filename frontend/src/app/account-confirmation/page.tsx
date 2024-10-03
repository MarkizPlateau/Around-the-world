import AccountConfirmationView from '@/views/AccountConfirmationView/AccountConfirmationView';
import {
  AccountConfirmationViewApiData,
  AccountConfirmationViewModelBuilder,
} from '@/views/AccountConfirmationView/AccountConfirmationViewModelBuilder';

export default async function Page() {
  const builder = new AccountConfirmationViewModelBuilder();
  const apiData: AccountConfirmationViewApiData = await builder.loadApiData();
  return <AccountConfirmationView apiData={apiData} />;
}
