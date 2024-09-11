import { Model } from './Model';
import { getClient } from '@/apollo/client';

export type LoadApiDataConfig = { query?: any; client?: ReturnType<typeof getClient> };

export interface IModelBuilder<T extends Model, TApiData = any> {
  build(apiData: TApiData): T;
  loadApiData(config?: LoadApiDataConfig): { [key: string]: any };
}
