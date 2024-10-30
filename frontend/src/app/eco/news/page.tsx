import EcoNewsView from '@/views/EcoNewsView/EcoNewsView';
import {
  EcoNewsViewApiData,
  EcoNewsViewModelBuilder,
} from '@/views/EcoNewsView/EcoNewsViewModelBuilder';

export default async function Page() {
  const builder = new EcoNewsViewModelBuilder();
  const apiData: EcoNewsViewApiData = await builder.loadApiData();
  return <EcoNewsView apiData={apiData} />;
}
