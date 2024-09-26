'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { ResetPasswordViewModel } from './ResetPasswordViewModel';
import { ResetPasswordViewModelBuilder } from './ResetPasswordViewModelBuilder';

type ResetPasswordViewType = {
  model: ResetPasswordViewModel;
};

const ResetPasswordView: NextPage<ResetPasswordViewType> = observer((props) => {
  return <h1>ResetPassword</h1>;
});

export default withModel<ResetPasswordViewModel, ResetPasswordViewModelBuilder>(
  ResetPasswordView,
  ResetPasswordViewModelBuilder,
);
