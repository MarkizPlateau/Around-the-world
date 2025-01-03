import MyProfileView from '@/views/MyProfileView/MyProfileView';
import {
  MyProfileViewApiData,
  MyProfileViewModelBuilder,
} from '@/views/MyProfileView/MyProfileViewModelBuilder';

export default async function Page() {
  const builder = new MyProfileViewModelBuilder();
  const apiData: MyProfileViewApiData = await builder.loadApiData();
  return <MyProfileView apiData={apiData} />;
}
