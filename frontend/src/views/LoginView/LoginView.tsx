'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { LoginViewModel } from './LoginViewModel';
import { LoginViewModelBuilder } from './LoginViewModelBuilder';

type LoginViewType = {
  model: LoginViewModel;
};

const LoginView: NextPage<LoginViewType> = observer((props) => {
  return <h1>Login</h1>;
});

export default withModel<LoginViewModel, LoginViewModelBuilder>(LoginView, LoginViewModelBuilder);
