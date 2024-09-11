import { Model } from '@/model/mvvm';
import { extendObservable, makeObservable, observable } from 'mobx';
import { EventsViewApiData } from './EventsViewModelBuilder';

export class EventsViewModel extends Model {
  dummy: string;
  constructor(apiData: EventsViewApiData) {
    super();
    this.dummy = apiData.dummy;
    extendObservable(this, {
      dummy: this.dummy,
    });

    makeObservable(this, {});
  }
}
