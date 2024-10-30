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
        Change password
      </Heading>
      <Text fontSize="medium" my="6">
        To regain access to your account, create a new password
      </Text>
      <VStack gap="4">
        <CustomFormControl
          errorMessage="Your password should be really secure! It must contain at least 6 characters, including at least one uppercase letter, one lowercase letter and one number."
          isInvalid={model.showErrors && !model.isPasswordCorrect}
          labelTitle="Password"
        >
          <CustomPasswordInput {...bindProperty(model, 'password')} placeholder="Password" />
        </CustomFormControl>
        <CustomFormControl
          errorMessage="The passwords are not identical"
          isInvalid={model.showErrors && !model.isConfirmPasswordCorrect}
          labelTitle="Repeat password"
        >
          <CustomPasswordInput
            {...bindProperty(model, 'passwordConfirmation')}
            placeholder="Repeat password"
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
            <Text>Your account password has been changed!</Text>
            <LinkNext route={ROUTES.LOGIN}>
              <Text
                as="span"
                color="pink"
                display="inline-block"
                fontWeight="600"
                width="max-content"
              >
                Log in
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
        text="Change password"
      />
    </FormWrapper>
  );
});

export default withModel<ResetPasswordViewModel, ResetPasswordViewModelBuilder>(
  ResetPasswordView,
  ResetPasswordViewModelBuilder,
);
