import { Model } from '@/model/mvvm';
import { extendObservable, makeObservable, observable } from 'mobx';
import { EventsNewsViewApiData } from './EventsNewsViewModelBuilder';

export class EventsNewsViewModel extends Model {
  dummy: string;
  constructor(apiData: EventsNewsViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {});
  }
}
