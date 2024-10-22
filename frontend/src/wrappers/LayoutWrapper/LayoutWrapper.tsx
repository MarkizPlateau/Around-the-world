'use client';

import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components';
import { ROUTES } from '@/constants/routes';
import { Box } from '@chakra-ui/react';

export default function LayoutWrapper({ children }: PropsWithChildren) {
  const path = usePathname();
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
    >
      {path !== ROUTES.HOME && <Header />}
      {path === ROUTES.HOME ? (
        <>{children}</>
      ) : (
        <Box as="main" maxW="screen-2xl" mx="auto" position="relative" px={{ base: 0, '2xl': 2 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}
