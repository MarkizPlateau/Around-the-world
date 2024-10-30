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
          Account recovery
        </Heading>
        <Text fontSize="medium" my="6">
          To recover your account, please provide your email address to which we will send you
          further instructions.
        </Text>
        <VStack gap="4">
          <CustomFormControl
            labelTitle="E-mail"
            isInvalid={model.showErrors && !model.isEmailCorrect}
            errorMessage="Username or valid email is required"
          >
            <CustomInput {...bindProperty(model, 'email')} placeholder="Email address" />
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
              <Text>A message with further instructions has been sent to your account.</Text>
            </Box>
          </Alert>
        )}

        <FormButton
          colorScheme="pink"
          borderRadius="xl"
          color="white"
          command={model.sendResetPasswordCode}
          text="Send"
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
