'use client';

import { NextPage } from 'next';
import { Alert, AlertIcon, AlertTitle, Box, Text } from '@chakra-ui/react';
import { FormWrapper } from '@/wrappers';

// TODO
// Strapi/Settings/Advanced settings/Redirection url - http://localhost:3000/account-confirmation
// Change this alert for Modal in LandingPage

const AccountConfirmationView: NextPage = () => {
  return (
    <FormWrapper py="20">
      <Alert status="success" colorScheme="green" borderRadius="xl">
        <AlertIcon />
        <Box>
          <AlertTitle mr="2">Congratulations !</AlertTitle>
          <Text>Your account is now active!</Text>
        </Box>
      </Alert>
    </FormWrapper>
  );
};

export default AccountConfirmationView;
