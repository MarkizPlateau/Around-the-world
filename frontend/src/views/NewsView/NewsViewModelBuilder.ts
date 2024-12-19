import { IModelBuilder } from '@/model/mvvm';
import { NewsViewModel } from './NewsViewModel';

export class NewsViewModelBuilder implements IModelBuilder<NewsViewModel, {}> {
  build(apiData: {}): NewsViewModel {
    return new NewsViewModel(apiData);
  }

  async loadApiData() {
    const apiData = {};
    return apiData;
  }
}
