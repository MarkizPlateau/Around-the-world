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
      mt={{ base: '0', sm: '40' }}
      mx="auto"
      maxWidth={{ base: '100vw', md: '600px' }}
      py="10"
      px={['4', '100']}
      {...props}
    >
      <Flex mx="auto" flexDirection="column">
        {children}
      </Flex>
    </Box>
  );
});

export default FormWrapper;
