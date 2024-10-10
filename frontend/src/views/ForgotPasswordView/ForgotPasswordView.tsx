'use client';

import { withModel } from '@/utils/hooks/withModel';
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import { ForgotPasswordViewModel } from './ForgotPasswordViewModel';
import { ForgotPasswordViewModelBuilder } from './ForgotPasswordViewModelBuilder';
import { FormWrapper } from '@/wrappers';
import { Alert, AlertIcon, AlertTitle, Box, Heading, Text, VStack } from '@chakra-ui/react';
import { CustomFormControl, CustomInput, FormButton } from '@/components';
import { bindProperty } from '@/model/mvvm';

type ForgotPasswordViewType = {
  model: ForgotPasswordViewModel;
};

const ForgotPasswordView: NextPage<ForgotPasswordViewType> = observer(
  ({ model }: ForgotPasswordViewType) => {
    return (
      <FormWrapper>
        <Heading as="h1" fontSize="3xl" color="purple" textAlign="center">
          Odzyskanie konta
        </Heading>
        <Text fontSize="medium" my="6">
          By odzyskać konto, podaj swój e-mail na który wyślemy Ci dalsze instrukcje
        </Text>
        <VStack gap="4">
          <CustomFormControl
            labelTitle="E-mail"
            isInvalid={model.showErrors && !model.isEmailCorrect && !model.isUsername}
            errorMessage="Wymagana jest nazwa użytkownika lub prawidłowy e-mail"
          >
            <CustomInput {...bindProperty(model, 'email')} placeholder="Adres e-mail" />
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
              <Text>Na Twoje konto wysłano wiadomość z dalszymi instrukcjami</Text>
            </Box>
          </Alert>
        )}

        <FormButton
          colorScheme="pink"
          borderRadius="xl"
          color="white"
          command={model.sendResetPasswordCode}
          text="Wyślij"
          isLoading={model.isApiDataLoading}
          my="10"
        />
      </FormWrapper>
    );
  },
);

export default withModel<ForgotPasswordViewModel, ForgotPasswordViewModelBuilder>(
  ForgotPasswordView,
  ForgotPasswordViewModelBuilder,
);
