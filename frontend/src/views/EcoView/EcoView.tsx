'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { EcoViewModel } from './EcoViewModel';
import { EcoViewModelBuilder } from './EcoViewModelBuilder';

type EcoViewType = {
  model: EcoViewModel;
};

const EcoView: NextPage<EcoViewType> = observer((props) => {
  return <h1>ECO OHAYO</h1>;
});

export default withModel<EcoViewModel, EcoViewModelBuilder>(EcoView, EcoViewModelBuilder);
