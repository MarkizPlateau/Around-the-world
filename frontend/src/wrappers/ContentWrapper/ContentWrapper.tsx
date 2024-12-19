import { Box, BoxProps, Flex, useColorModeValue } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
export interface ContentWrapperProps extends BoxProps {
  children: React.ReactNode;
}

export const ContentWrapper = observer(({ children, ...props }: ContentWrapperProps) => {
  const bgColor = useColorModeValue('white', 'dark');
  const headingColor = useColorModeValue('purple', 'main');
  return (
    <Box
      bg={bgColor}
      borderRadius={{ base: '0', sm: '2xl' }}
      boxShadow="base"
      maxWidth={{ base: '100vw', md: '6xl' }}
      mx="auto"
      my={{ base: '0', sm: '6' }}
      px={['4', '100']}
      py="10"
      sx={{
        'h1, h2, h3, h4, h5, h6': {
          color: headingColor,
        },
      }}
      {...props}
    >
      <Flex flexDirection="column" mx="auto">
        {children}
      </Flex>
    </Box>
  );
});

export default ContentWrapper;
