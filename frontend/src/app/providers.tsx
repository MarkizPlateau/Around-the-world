'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthWrapper } from '@/wrappers';
import { theme } from '@/styles/theme';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <AuthWrapper>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </AuthWrapper>
    </SessionProvider>
  );
}
