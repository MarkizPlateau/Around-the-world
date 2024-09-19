import { IModelBuilder } from '@/model/mvvm';
import { EcoNewsViewModel } from './EcoNewsViewModel';

export type EcoNewsViewApiData = {
  dummy: string;
};
export class EcoNewsViewModelBuilder
  implements IModelBuilder<EcoNewsViewModel, EcoNewsViewApiData>
{
  build(apiData: EcoNewsViewApiData): EcoNewsViewModel {
    return new EcoNewsViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
