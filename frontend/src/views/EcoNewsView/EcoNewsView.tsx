'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { EcoNewsViewModel } from './EcoNewsViewModel';
import { EcoNewsViewModelBuilder } from './EcoNewsViewModelBuilder';
import { PageWrapper } from '@/wrappers';
import { Heading } from '@chakra-ui/react';

type EcoNewsViewType = {
  model: EcoNewsViewModel;
};

const EcoNewsView: NextPage<EcoNewsViewType> = observer((props) => {
  return (
    <PageWrapper>
      <Heading as="h1" color="mainDark">
        Eco List
      </Heading>
    </PageWrapper>
  );
});

export default withModel<EcoNewsViewModel, EcoNewsViewModelBuilder>(
  EcoNewsView,
  EcoNewsViewModelBuilder,
);
