import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
export interface FormWrapperProps extends BoxProps {
  children: React.ReactNode;
}

export const FormWrapper = observer(({ children, ...props }: FormWrapperProps) => {
  return (
    <Box
      bg="white"
      borderRadius={{ base: '0', sm: '2xl' }}
      boxShadow="login"
      maxWidth={{ base: '100vw', md: '600px' }}
      mt={{ base: '0', sm: '20' }}
      mx="auto"
      px={['4', '100']}
      py="10"
      {...props}
    >
      <Flex flexDirection="column" mx="auto">
        {children}
      </Flex>
    </Box>
  );
});

export default FormWrapper;
