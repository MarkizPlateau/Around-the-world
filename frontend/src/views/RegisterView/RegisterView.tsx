'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { RegisterViewModel } from './RegisterViewModel';
import { RegisterViewModelBuilder } from './RegisterViewModelBuilder';

type RegisterViewType = {
  model: RegisterViewModel;
};

const RegisterView: NextPage<RegisterViewType> = observer((props) => {
  return <h1>Register</h1>;
});

export default withModel<RegisterViewModel, RegisterViewModelBuilder>(
  RegisterView,
  RegisterViewModelBuilder,
);
