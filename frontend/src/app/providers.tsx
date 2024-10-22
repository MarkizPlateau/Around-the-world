'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AuthWrapper } from '@/wrappers';
import { theme } from '@/styles/theme';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <AuthWrapper>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </AuthWrapper>
    </SessionProvider>
  );
}
