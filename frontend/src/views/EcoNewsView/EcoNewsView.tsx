'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { EcoNewsViewModel } from './EcoNewsViewModel';
import { EcoNewsViewModelBuilder } from './EcoNewsViewModelBuilder';
import { PageWrapper } from '@/wrappers';

type EcoNewsViewType = {
  model: EcoNewsViewModel;
};

const EcoNewsView: NextPage<EcoNewsViewType> = observer((props) => {
  return (
    <PageWrapper>
      <h1>ECO OHAYO</h1>
    </PageWrapper>
  );
});

export default withModel<EcoNewsViewModel, EcoNewsViewModelBuilder>(
  EcoNewsView,
  EcoNewsViewModelBuilder,
);
