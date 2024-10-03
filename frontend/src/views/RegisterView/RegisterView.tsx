'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { RegisterViewModel } from './RegisterViewModel';
import { RegisterViewModelBuilder } from './RegisterViewModelBuilder';
import { FormWrapper } from '@/wrappers';
import { Alert, AlertIcon, AlertTitle, Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import {
  CustomFormControl,
  CustomInput,
  CustomPasswordInput,
  FormButton,
  LinkNext,
} from '@/components';
import { bindProperty } from '@/model/mvvm';

type RegisterViewType = {
  model: RegisterViewModel;
};

const RegisterView: NextPage<RegisterViewType> = observer(({ model }: RegisterViewType) => {
  return (
    <FormWrapper>
      <Heading as="h1" fontSize="3xl" mb="6" color="purple" textAlign="center">
        Utwórz konto
      </Heading>
      <VStack gap="4" mb="6">
        <CustomFormControl
          labelTitle="Nazwa użytkownika"
          isInvalid={model.showErrors && !model.isUsername}
          errorMessage="Podaj nazwę użytkownika"
        >
          <CustomInput {...bindProperty(model, 'username')} placeholder="Nazwa użytkownika" />
        </CustomFormControl>
        <CustomFormControl
          labelTitle="E-mail"
          isInvalid={model.showErrors && !model.isEmailCorrect}
          errorMessage="Nieprawidłowy adres e-mail"
        >
          <CustomInput {...bindProperty(model, 'email')} placeholder="Adres e-mail" />
        </CustomFormControl>
        <CustomFormControl
          labelTitle="Hasło"
          isInvalid={model.showErrors && !model.isPasswordCorrect}
          errorMessage="Twoje hasło powinno być naprawdę bezpieczne! Musi zawierać minimum 6 znaków, w tym przynajmniej jedną dużą literę, jedną małą literę i jedną cyfrę."
        >
          <CustomPasswordInput {...bindProperty(model, 'password')} placeholder="Hasło" />
        </CustomFormControl>
        <CustomFormControl
          labelTitle="Powtórz hasło"
          isInvalid={model.showErrors && !model.isConfirmPasswordCorrect}
          errorMessage="Hasła nie są identyczne"
        >
          <CustomPasswordInput
            {...bindProperty(model, 'passwordConfirmation')}
            placeholder="Powtórz hasło"
          />
        </CustomFormControl>
      </VStack>

      {model.serverErrors && (
        <Alert status="error" mt="3" colorScheme="red">
          <AlertIcon />
          <AlertTitle mr="2">{model.serverErrors}</AlertTitle>
        </Alert>
      )}

      {model.successfulSendForm && (
        <Alert status="success" mt="3" colorScheme="green" borderRadius="base">
          <AlertIcon />
          <Box>
            <AlertTitle mr="2">Gratulacje! Rejestracja zakończona sukcesem!</AlertTitle>

            <Text>
              Aby aktywować swoje konto, wystarczy potwierdzić rejestrację, korzystając z
              wiadomości, którą wysłaliśmy na Twój adres e-mail.
            </Text>
          </Box>
        </Alert>
      )}
      <FormButton
        colorScheme="pink"
        borderRadius="xl"
        color="white"
        command={model.register}
        text="Zarejestruj się"
        isLoading={model.isApiDataLoading}
        my="10"
      />
      <HStack justifyContent="center">
        <Text>Masz już konto?</Text>
        <LinkNext route="/login">
          <Text width="min-content" as="span" color="pink" fontWeight="600">
            Zaloguj się
          </Text>
        </LinkNext>
      </HStack>
    </FormWrapper>
  );
});

export default withModel<RegisterViewModel, RegisterViewModelBuilder>(
  RegisterView,
  RegisterViewModelBuilder,
);
