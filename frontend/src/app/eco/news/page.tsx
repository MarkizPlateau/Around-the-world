import EcoNewsView from '@/views/Eco/EcoNewsView/EcoNewsView';
import {
  EcoNewsViewApiData,
  EcoNewsViewModelBuilder,
} from '@/views/Eco/EcoNewsView/EcoNewsViewModelBuilder';

export default async function Page() {
  const builder = new EcoNewsViewModelBuilder();
  const apiData: EcoNewsViewApiData = await builder.loadApiData();
  return <EcoNewsView apiData={apiData} />;
}
