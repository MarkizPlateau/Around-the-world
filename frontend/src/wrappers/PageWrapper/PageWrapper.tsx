import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
export interface PageWrapperProps extends BoxProps {
  children: React.ReactNode;
}

export const PageWrapper = observer(({ children, ...props }: PageWrapperProps) => {
  const bgColor = useColorModeValue('white', 'dark');
  return (
    <Box
      bg={bgColor}
      px={['4', '14']}
      py={['4', '10']}
      boxShadow="baseColor"
      minHeight="100%"
      {...props}
    >
      {children}
    </Box>
  );
});

export default PageWrapper;
