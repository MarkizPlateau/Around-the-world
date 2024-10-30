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
      h="100vh"
      sx={{
        bg: 'linear-gradient(to bottom, rgb(214, 219, 220), rgb(255, 255, 255))',
        color: 'black',
        _dark: {
          bg: 'linear-gradient(to bottom, #1a202c, #2d3748)',
          color: 'white',
        },
      }}
      w="100vw"
      display={isHome ? 'block' : 'flex'}
      flexDirection="column"
    >
      {!isHome && <Header />}
      {isHome ? (
        <>{children}</>
      ) : (
        <Box mx="auto" as="main" position="relative" maxWidth="80rem" width="100%" flex="1">
          {children}
        </Box>
      )}
    </Box>
  );
}
