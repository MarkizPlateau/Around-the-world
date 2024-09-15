import { Model } from './Model';
import { makeClient } from '@/apollo/client';

export type LoadApiDataConfig = { query?: any; client?: ReturnType<typeof makeClient> };

export interface IModelBuilder<T extends Model, TApiData = any> {
  build(apiData: TApiData): T;
  loadApiData(config?: LoadApiDataConfig): { [key: string]: any };
}
