'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { ResetPasswordViewModel } from './ResetPasswordViewModel';
import { ResetPasswordViewModelBuilder } from './ResetPasswordViewModelBuilder';
import { useEffect } from 'react';
import { FormWrapper } from '@/wrappers';
import { Alert, AlertIcon, AlertTitle, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { CustomFormControl, CustomPasswordInput, FormButton, LinkNext } from '@/components';
import { bindProperty } from '@/model/mvvm';
import { ROUTES } from '@/constants/routes';

type ResetPasswordViewType = {
  model: ResetPasswordViewModel;
};

const ResetPasswordView: NextPage<ResetPasswordViewType> = observer(({ model }) => {
  useEffect(() => {
    console.log('model.resetPassword', model.resetPasswordCode);
  }, [model.resetPasswordCode]);

  return (
    <FormWrapper>
      <Heading as="h1" fontSize="3xl" color="purple" textAlign="center">
        Zmień hasło
      </Heading>
      <Text fontSize="medium" my="6">
        Aby odzyskać dostęp do konta utwórz nowe hasło
      </Text>
      <VStack gap="4">
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

      {true && (
        <Alert status="success" mt="3" colorScheme="green" borderRadius="base">
          <AlertIcon />
          <HStack justifyContent="center" my="2">
            <Text>Hasło do Twojego konta zostało zmienione!</Text>
            <LinkNext route={ROUTES.LOGIN}>
              <Text
                width="max-content"
                as="span"
                display="inline-block"
                color="pink"
                fontWeight="600"
              >
                Zaloguj się
              </Text>
            </LinkNext>
          </HStack>
        </Alert>
      )}

      <FormButton
        colorScheme="pink"
        borderRadius="xl"
        color="white"
        command={model.resetPassword}
        text="Zmień Hasło"
        isLoading={model.isApiDataLoading}
        my="10"
      />
    </FormWrapper>
  );
});

export default withModel<ResetPasswordViewModel, ResetPasswordViewModelBuilder>(
  ResetPasswordView,
  ResetPasswordViewModelBuilder,
);
