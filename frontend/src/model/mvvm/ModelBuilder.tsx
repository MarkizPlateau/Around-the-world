import { Model } from './Model';
import { makeClient } from '@/apollo/client';

export interface PageContext {
  params: Record<string, string>;
  searchParams: Record<string, string | undefined>;
}

export type LoadApiDataConfig = {
  query?: any;
  client?: ReturnType<typeof makeClient>;
} & PageContext;

export interface IModelBuilder<T extends Model, TApiData = any> {
  build(apiData: TApiData): T;
  loadApiData(config?: LoadApiDataConfig): { [key: string]: any };
}
