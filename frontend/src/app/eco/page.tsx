import EcoView from '@/views/EcoView/EcoView';
import { EcoViewApiData, EcoViewModelBuilder } from '@/views/EcoView/EcoViewModelBuilder';

export default async function Page() {
  const builder = new EcoViewModelBuilder();
  const apiData: EcoViewApiData = await builder.loadApiData();
  return <EcoView apiData={apiData} />;
}
