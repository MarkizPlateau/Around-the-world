'use client';

import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { bindProperty } from '@/model/mvvm';
import { withModel } from '@/utils/hooks/withModel';
import { LoginViewModel } from './LoginViewModel';
import { LoginViewModelBuilder } from './LoginViewModelBuilder';
import { FormWrapper } from '@/wrappers';
import { Alert, AlertIcon, AlertTitle, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import {
  CustomFormControl,
  CustomInput,
  CustomPasswordInput,
  FormButton,
  LinkNext,
} from '@/components';
import { ROUTES } from '@/constants/routes';
import { useNavigationContext } from '@/providers/NavigationProvider/NavigationProvider';

type LoginViewType = {
  model: LoginViewModel;
};

const hStackContent = [
  {
    text: `Don't have an account?`,
    url: ROUTES.REGISTER,
    linkText: 'Sign up',
    id: 1,
  },
  {
    text: 'Forgot your password?',
    url: ROUTES.FORGOT_PASSWORD,
    linkText: 'Recover your account',
    id: 2,
  },
];

const LoginView: NextPage<LoginViewType> = observer(({ model }: LoginViewType) => {
  const { previousRoute } = useNavigationContext();
  useEffect(() => {
    if (previousRoute) {
      model.setPreviousRoute(previousRoute);
    }
  }, [previousRoute]);
  return (
    <FormWrapper>
      <Heading as="h1" fontSize="3xl" textAlign="center">
        Sign in
      </Heading>
      <Text fontSize="medium" my="6">
        By selecting a username or email address
      </Text>
      <VStack gap="4" mb="6">
        <CustomFormControl labelTitle="Username">
          <CustomInput {...bindProperty(model, 'username')} placeholder="Username" />
        </CustomFormControl>
        <CustomFormControl
          errorMessage="Username or valid email is required"
          isInvalid={model.showErrors && !model.isEmailCorrect && !model.isUsername}
          labelTitle="E-mail"
        >
          <CustomInput {...bindProperty(model, 'email')} placeholder="Email address" />
        </CustomFormControl>
        <CustomFormControl
          errorMessage="The password must contain at least 6 characters, including at least one uppercase letter, one lowercase letter and one number."
          isInvalid={model.showErrors && !model.isPasswordCorrect}
          labelTitle="Password"
        >
          <CustomPasswordInput {...bindProperty(model, 'password')} placeholder="Password" />
        </CustomFormControl>
      </VStack>

      {model.serverErrors && (
        <Alert colorScheme="red" mt="3" status="error">
          <AlertIcon />
          <AlertTitle mr="2">{model.serverErrors}</AlertTitle>
        </Alert>
      )}

      <FormButton
        borderRadius="xl"
        color="white"
        colorScheme="pink"
        command={model.login}
        isLoading={model.isApiDataLoading}
        my="10"
        text="Sign in"
      />
      {hStackContent.map((item) => {
        return (
          <HStack alignItems="baseline" justifyContent="center" key={item.id} my="2">
            <Text>{item.text}</Text>
            <LinkNext fontSize="xl" route={item.url}>
              <Text as="span" color="pink" fontWeight="600" width="min-content">
                {item.linkText}
              </Text>
            </LinkNext>
          </HStack>
        );
      })}
    </FormWrapper>
  );
});

export default withModel<LoginViewModel, LoginViewModelBuilder>(LoginView, LoginViewModelBuilder);
