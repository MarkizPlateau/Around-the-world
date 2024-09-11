/* eslint-disable react/display-name */
import { FC } from 'react';

import Error from 'next/error';
import { ConstructorOf, IModelBuilder, Model } from '@/model/mvvm';

export function withModel<T extends Model, U extends IModelBuilder<T>>(
  Component: FC<{ model: T; serverPayload?: any }>,
  ModelBuilder: ConstructorOf<U>,
) {
  return ({
    apiData,
    serverPayload,
    errorCode,
  }: {
    apiData: any;
    serverPayload?: any;
    errorCode?: number;
  }) => {
    if (!apiData) {
      return <Error statusCode={errorCode ?? 500}></Error>;
    }

    const builder = new ModelBuilder();
    const model = builder.build(apiData);

    return <Component model={model} serverPayload={serverPayload} />;
  };
}
