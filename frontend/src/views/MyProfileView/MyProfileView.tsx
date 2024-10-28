'use client';

import { NextPage } from 'next';
import { observer } from 'mobx-react';
import { FormWrapper } from '@/wrappers';
import { MyProfileViewModel } from './MyProfileViewModel';
import { MyProfileViewModelBuilder } from './MyProfileViewModelBuilder';
import { withModel } from '@/utils/hooks/withModel';
import { Alert, AlertIcon, AlertTitle, Box, Heading, VStack } from '@chakra-ui/react';
import { CustomFormControl, CustomInput, CustomPasswordInput, FormButton } from '@/components';
import { bindProperty } from '@/model/mvvm';

type MyProfileViewType = {
  model: MyProfileViewModel;
};

const MyProfileView: NextPage<MyProfileViewType> = observer(({ model }: MyProfileViewType) => {
  return (
    <FormWrapper>
      <Heading as="h1" color="purple" fontSize="3xl" mb="6" textAlign="center">
        Twój profil
      </Heading>
      <VStack gap="4" mb="6">
        <CustomFormControl errorMessage="Podaj nazwę użytkownika" labelTitle="Nazwa użytkownika">
          <CustomInput
            {...bindProperty(model.userData, 'username')}
            placeholder="Nazwa użytkownika"
          />
        </CustomFormControl>
        <CustomFormControl
          errorMessage="Nieprawidłowy adres e-mail"
          isInvalid={model.showErrors && !model.isEmailCorrect}
          labelTitle="E-mail"
        >
          <CustomInput {...bindProperty(model, 'email')} placeholder="Adres e-mail" />
        </CustomFormControl>
        <CustomFormControl
          errorMessage="Twoje hasło powinno być naprawdę bezpieczne! Musi zawierać minimum 6 znaków, w tym przynajmniej jedną dużą literę, jedną małą literę i jedną cyfrę."
          isInvalid={model.showErrors && !model.isPasswordCorrect}
          labelTitle="Hasło"
        >
          <CustomPasswordInput {...bindProperty(model, 'password')} placeholder="Hasło" />
        </CustomFormControl>
        <CustomFormControl
          errorMessage="Hasła nie są identyczne"
          isInvalid={model.showErrors && !model.isConfirmPasswordCorrect}
          labelTitle="Powtórz hasło"
        >
          <CustomPasswordInput
            {...bindProperty(model, 'passwordConfirmation')}
            placeholder="Powtórz hasło"
          />
        </CustomFormControl>
      </VStack>

      {model.serverErrors && (
        <Alert colorScheme="red" mt="3" status="error">
          <AlertIcon />
          <AlertTitle mr="2">{model.serverErrors}</AlertTitle>
        </Alert>
      )}

      {model.successfulSendForm && (
        <Alert borderRadius="base" colorScheme="green" mt="3" status="success">
          <AlertIcon />
          <Box>
            <AlertTitle mr="2">Twoje dane zostały zmienione!</AlertTitle>
          </Box>
        </Alert>
      )}
      <FormButton
        borderRadius="xl"
        color="white"
        colorScheme="pink"
        command={model.updateUser}
        isLoading={model.isApiDataLoading}
        my="10"
        text="Zmień dane"
      />
    </FormWrapper>
  );
});

export default withModel<MyProfileViewModel, MyProfileViewModelBuilder>(
  MyProfileView,
  MyProfileViewModelBuilder,
);
