'use client';

import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { ApolloWrapper } from '@/wrappers/ApolloWrapper/ApolloWrapper';

export function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <ApolloWrapper>{children}</ApolloWrapper>
    </SessionProvider>
  );
}
