'use client';

import { ApolloWrapper } from '@/wrappers/ApolloWrapper';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { PropsWithChildren } from 'react';
ApolloNextAppProvider;
export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ApolloWrapper>{children}</ApolloWrapper>
    </>
  );
}
