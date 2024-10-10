'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
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
import { bindProperty } from '@/model/mvvm';
import { ROUTES } from '@/constants/routes';

type LoginViewType = {
  model: LoginViewModel;
};

const hStackContent = [
  {
    text: 'Nie masz konta?',
    url: ROUTES.REGISTER,
    linkText: 'Zarejestruj się',
    id: 1,
  },
  {
    text: 'Zapomniałeś hasła?',
    url: ROUTES.FORGOT_PASSWORD,
    linkText: 'Odzyskaj konto',
    id: 2,
  },
];

const LoginView: NextPage<LoginViewType> = observer(({ model }: LoginViewType) => {
  return (
    <FormWrapper>
      <Heading as="h1" fontSize="3xl" color="purple" textAlign="center">
        Zaloguj się
      </Heading>
      <Text fontSize="medium" my="6">
        Wybierając nazwę użytkownika lub adres e-mail
      </Text>
      <VStack gap="4" mb="6">
        <CustomFormControl labelTitle="Nazwa użytkownika">
          <CustomInput {...bindProperty(model, 'username')} placeholder="Nazwa użytkownika" />
        </CustomFormControl>
        <CustomFormControl
          labelTitle="E-mail"
          isInvalid={model.showErrors && !model.isEmailCorrect && !model.isUsername}
          errorMessage="Wymagana jest nazwa użytkownika lub prawidłowy e-mail"
        >
          <CustomInput {...bindProperty(model, 'email')} placeholder="Adres e-mail" />
        </CustomFormControl>
        <CustomFormControl
          labelTitle="Hasło"
          isInvalid={model.showErrors && !model.isPasswordCorrect}
          errorMessage="Hasło musi zawierać minimum 6 znaków, w tym przynajmniej jedną dużą literę, jedną małą literę i jedną cyfrę."
        >
          <CustomPasswordInput {...bindProperty(model, 'password')} placeholder="Hasło" />
        </CustomFormControl>
      </VStack>

      {model.serverErrors && (
        <Alert status="error" mt="3" colorScheme="red">
          <AlertIcon />
          <AlertTitle mr="2">{model.serverErrors}</AlertTitle>
        </Alert>
      )}

      <FormButton
        colorScheme="pink"
        borderRadius="xl"
        color="white"
        command={model.login}
        text="Zaloguj się"
        isLoading={model.isApiDataLoading}
        my="10"
      />
      {hStackContent.map((item) => {
        return (
          <HStack justifyContent="center" my="2" key={item.id}>
            <Text>{item.text}</Text>
            <LinkNext route={item.url}>
              <Text width="min-content" as="span" color="pink" fontWeight="600">
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
