'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { ResetPasswordViewModel } from './ResetPasswordViewModel';
import { ResetPasswordViewModelBuilder } from './ResetPasswordViewModelBuilder';
import { FormWrapper } from '@/wrappers';
import { Alert, AlertIcon, AlertTitle, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { CustomFormControl, CustomPasswordInput, FormButton, LinkNext } from '@/components';
import { bindProperty } from '@/model/mvvm';
import { ROUTES } from '@/constants/routes';

type ResetPasswordViewType = {
  model: ResetPasswordViewModel;
};

const ResetPasswordView: NextPage<ResetPasswordViewType> = observer(({ model }) => {
  return (
    <FormWrapper>
      <Heading as="h1" color="purple" fontSize="3xl" textAlign="center">
        Zmień hasło
      </Heading>
      <Text fontSize="medium" my="6">
        Aby odzyskać dostęp do konta utwórz nowe hasło
      </Text>
      <VStack gap="4">
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
          <HStack justifyContent="center" my="2">
            <Text>Hasło do Twojego konta zostało zmienione!</Text>
            <LinkNext route={ROUTES.LOGIN}>
              <Text
                as="span"
                color="pink"
                display="inline-block"
                fontWeight="600"
                width="max-content"
              >
                Zaloguj się
              </Text>
            </LinkNext>
          </HStack>
        </Alert>
      )}

      <FormButton
        borderRadius="xl"
        color="white"
        colorScheme="pink"
        command={model.resetPassword}
        isLoading={model.isApiDataLoading}
        my="10"
        text="Zmień Hasło"
      />
    </FormWrapper>
  );
});

export default withModel<ResetPasswordViewModel, ResetPasswordViewModelBuilder>(
  ResetPasswordView,
  ResetPasswordViewModelBuilder,
);
