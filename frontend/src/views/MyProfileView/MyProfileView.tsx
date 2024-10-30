'use client';

import { NextPage } from 'next';
import { observer } from 'mobx-react';
import { FormWrapper } from '@/wrappers';
import { MyProfileViewModel } from './MyProfileViewModel';
import { MyProfileViewModelBuilder } from './MyProfileViewModelBuilder';
import { withModel } from '@/utils/hooks/withModel';
import { Alert, AlertIcon, AlertTitle, Box, Heading, Text, VStack } from '@chakra-ui/react';
import { CustomFormControl, CustomInput, CustomPasswordInput, FormButton } from '@/components';
import { bindProperty } from '@/model/mvvm';

type MyProfileViewType = {
  model: MyProfileViewModel;
};

const MyProfileView: NextPage<MyProfileViewType> = observer(({ model }: MyProfileViewType) => {
  return (
    <FormWrapper>
      <Heading as="h1" color="purple" fontSize="3xl" mb="4" textAlign="center">
        Your profile
      </Heading>
      <Text mb="4">In this view you can change your data.</Text>
      <VStack gap="4" mb="6">
        <CustomFormControl errorMessage="Enter your username" labelTitle="Username">
          <CustomInput {...bindProperty(model.userData, 'username')} placeholder="Username" />
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
            <AlertTitle mr="2">Your details have been changed!</AlertTitle>
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
        text="Change data"
      />
    </FormWrapper>
  );
});

export default withModel<MyProfileViewModel, MyProfileViewModelBuilder>(
  MyProfileView,
  MyProfileViewModelBuilder,
);
