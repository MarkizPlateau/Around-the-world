import { IModelBuilder } from '@/model/mvvm';
import { EcoViewModel } from './EcoViewModel';

export type EcoViewApiData = {
  dummy: string;
};
export class EcoViewModelBuilder implements IModelBuilder<EcoViewModel, EcoViewApiData> {
  build(apiData: EcoViewApiData): EcoViewModel {
    return new EcoViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {
      dummy: 'dummy',
    };

    return apiData;
  }
}
