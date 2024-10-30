import { Model } from '@/model/mvvm';
import { extendObservable, makeObservable, observable } from 'mobx';
import { EcoNewsViewApiData } from './EcoNewsViewModelBuilder';

export class EcoNewsViewModel extends Model {
  data: EcoNewsViewApiData;
  // IDEA
  // Less code approach, we do not type everything separately in the class and use extendObservable
  // but TS may not catch some errors, it is good to use Getter/Setter etc.
  // set dummy(value: EcoNewsViewApiData["dummy"]) {
  //   this.data.dummy = value;
  // }
  constructor(apiData: EcoNewsViewApiData) {
    super();
    this.data = apiData;
    extendObservable(this, {
      dummy: this.data.dummy,
    });

    makeObservable(this, {});
  }
}
