'use client';

import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components';
import { ROUTES } from '@/constants/routes';
import { Box } from '@chakra-ui/react';

export default function LayoutWrapper({ children }: PropsWithChildren) {
  const path = usePathname();
  const isHome = path === ROUTES.HOME;
  return (
    <Box
      display={isHome ? 'block' : 'flex'}
      flexDirection="column"
      minH="100vh"
      sx={{
        bg: 'linear-gradient(to bottom, rgb(214, 219, 220), rgb(255, 255, 255))',
        color: 'black',
        _dark: {
          bg: 'linear-gradient(to bottom, #1a202c, #2d3748)',
          color: 'white',
        },
      }}
      w="100vw"
    >
      {!isHome && <Header />}
      {isHome ? (
        <>{children}</>
      ) : (
        <Box as="main" flex="1" maxWidth="80rem" mx="auto" position="relative" width="100%">
          {children}
        </Box>
      )}
    </Box>
  );
}
