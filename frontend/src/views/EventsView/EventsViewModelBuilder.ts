import { IModelBuilder } from '@/model/mvvm';
import { EventsViewModel } from './EventsViewModel';

export type EventsViewApiData = {
  dummy: string;
};
export class EventsViewModelBuilder implements IModelBuilder<EventsViewModel, EventsViewApiData> {
  build(apiData: EventsViewApiData): EventsViewModel {
    return new EventsViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
