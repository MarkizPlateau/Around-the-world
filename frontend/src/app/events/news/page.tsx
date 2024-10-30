import EventsNewsView from '@/views/EventsNewsView/EventsNewsView';
import {
  EventsNewsViewApiData,
  EventsNewsViewModelBuilder,
} from '@/views/EventsNewsView/EventsNewsViewModelBuilder';

export default async function Page() {
  const builder = new EventsNewsViewModelBuilder();
  const apiData: EventsNewsViewApiData = await builder.loadApiData();
  return <EventsNewsView apiData={apiData} />;
}
