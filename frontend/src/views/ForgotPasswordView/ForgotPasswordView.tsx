'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { ForgotPasswordViewModel } from './ForgotPasswordViewModel';
import { ForgotPasswordViewModelBuilder } from './ForgotPasswordViewModelBuilder';

type ForgotPasswordViewType = {
  model: ForgotPasswordViewModel;
};

const ForgotPasswordView: NextPage<ForgotPasswordViewType> = observer((props) => {
  return <h1>ForgotPassword</h1>;
});

export default withModel<ForgotPasswordViewModel, ForgotPasswordViewModelBuilder>(
  ForgotPasswordView,
  ForgotPasswordViewModelBuilder,
);
