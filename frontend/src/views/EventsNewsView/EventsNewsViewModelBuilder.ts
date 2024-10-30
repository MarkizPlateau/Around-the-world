import { IModelBuilder } from '@/model/mvvm';
import { EventsNewsViewModel } from './EventsNewsViewModel';

export type EventsNewsViewApiData = {
  dummy: string;
};
export class EventsNewsViewModelBuilder
  implements IModelBuilder<EventsNewsViewModel, EventsNewsViewApiData>
{
  build(apiData: EventsNewsViewApiData): EventsNewsViewModel {
    return new EventsNewsViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
