'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AuthWrapper } from '@/wrappers';
import { theme } from '@/styles/theme';
import { NavigationProvider } from '@/providers/NavigationProvider/NavigationProvider';

type ProvidersProps = PropsWithChildren<{ session: any }>;

export function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <NavigationProvider>
        <AuthWrapper>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              {children}
            </ChakraProvider>
          </CacheProvider>
        </AuthWrapper>
      </NavigationProvider>
    </SessionProvider>
  );
}
