import EventsView from '@/views/EventsView/EventsView';
import {
  EventsViewApiData,
  EventsViewModelBuilder,
} from '@/views/EventsView/EventsViewModelBuilder';

export default async function Page() {
  const builder = new EventsViewModelBuilder();
  const apiData: EventsViewApiData = await builder.loadApiData();
  return <EventsView apiData={apiData} />;
}
