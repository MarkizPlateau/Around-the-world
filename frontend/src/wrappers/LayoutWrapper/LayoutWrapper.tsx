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
    >
      {!isHome && <Header />}
      {isHome ? (
        <>{children}</>
      ) : (
        <main className="relative mx-auto max-w-screen-2xl 2xl:px-2">{children}</main>
      )}
    </Box>
  );
}
