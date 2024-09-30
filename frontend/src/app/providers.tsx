'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ApolloWrapper } from '@/wrappers/ApolloWrapper/ApolloWrapper';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ApolloWrapper>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </ApolloWrapper>
    </SessionProvider>
  );
}
