'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { EcoNewsViewModel } from './EcoNewsViewModel';
import { EcoNewsViewModelBuilder } from './EcoNewsViewModelBuilder';

type EcoNewsViewType = {
  model: EcoNewsViewModel;
};

const EcoNewsView: NextPage<EcoNewsViewType> = observer((props) => {
  return <h1>ECO OHAYO</h1>;
});

export default withModel<EcoNewsViewModel, EcoNewsViewModelBuilder>(
  EcoNewsView,
  EcoNewsViewModelBuilder,
);
