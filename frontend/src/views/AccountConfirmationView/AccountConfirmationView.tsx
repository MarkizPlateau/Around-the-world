'use client';

import { NextPage } from 'next';
import { Alert, AlertIcon, AlertTitle, Box, Flex, Text } from '@chakra-ui/react';
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
          <AlertTitle mr="2">Gratulacje !</AlertTitle>
          <Text>Twoje konto jest już aktywne !</Text>
        </Box>
      </Alert>
    </FormWrapper>
  );
};

export default AccountConfirmationView;
