import NewsView from '@/views/NewsView/NewsView';
import { NewsViewModelBuilder } from '@/views/NewsView/NewsViewModelBuilder';

export default async function Page() {
  const builder = new NewsViewModelBuilder();
  const apiData: {} = await builder.loadApiData();
  return <NewsView apiData={apiData} />;
}
