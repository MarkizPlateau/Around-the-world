import { Model } from '@/model/mvvm';
import { extendObservable, makeObservable, observable } from 'mobx';
import { EcoViewApiData } from './EcoViewModelBuilder';

export class EcoViewModel extends Model {
  data: EcoViewApiData;
  // IDEA
  // Less code approach, we do not type everything separately in the class and use extendObservable
  // but TS may not catch some errors, it is good to use Getter/Setter etc.
  // set dummy(value: EcoViewApiData["dummy"]) {
  //   this.data.dummy = value;
  // }
  constructor(apiData: EcoViewApiData) {
    super();
    this.data = apiData;
    extendObservable(this, {
      dummy: this.data.dummy,
    });

    makeObservable(this, {});
  }
}
