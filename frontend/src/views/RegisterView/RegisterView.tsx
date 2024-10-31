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
import { ROUTES } from '@/constants/routes';

type RegisterViewType = {
  model: RegisterViewModel;
};

const RegisterView: NextPage<RegisterViewType> = observer(({ model }: RegisterViewType) => {
  return (
    <FormWrapper>
      <Heading as="h1" color="purple" fontSize="3xl" mb="6" textAlign="center">
        Create an account
      </Heading>
      <VStack gap="4" mb="6">
        <CustomFormControl
          errorMessage="Enter your username"
          isInvalid={model.showErrors && !model.isUsername}
          labelTitle="Username"
        >
          <CustomInput {...bindProperty(model, 'username')} placeholder="Username" />
        </CustomFormControl>
        <CustomFormControl
          errorMessage="Invalid email address"
          isInvalid={model.showErrors && !model.isEmailCorrect}
          labelTitle="E-mail"
        >
          <CustomInput {...bindProperty(model, 'email')} placeholder="Email address" />
        </CustomFormControl>
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
          <Box>
            <AlertTitle mr="2">Congratulations! Registration completed successfully!</AlertTitle>

            <Text>
              To activate your account, simply confirm your registration using the message we sent
              to your email address.
            </Text>
          </Box>
        </Alert>
      )}
      <FormButton
        borderRadius="xl"
        color="white"
        colorScheme="pink"
        command={model.register}
        isLoading={model.isApiDataLoading}
        my="10"
        text="Sign up"
      />
      <HStack justifyContent="center" alignItems="baseline">
        <Text>Already have an account?</Text>
        <LinkNext route={ROUTES.LOGIN} fontSize="xl">
          <Text as="span" color="pink" fontWeight="600" width="min-content">
            Sign in
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
