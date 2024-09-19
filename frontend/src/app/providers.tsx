'use client';

import { PropsWithChildren } from 'react';
import { ApolloWrapper } from '@/wrappers/ApolloWrapper/ApolloWrapper';

export function Providers({ children }: PropsWithChildren) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
