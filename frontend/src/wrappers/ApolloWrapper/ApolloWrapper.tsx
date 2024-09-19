'use client';
import { makeClient } from '@/apollo/client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
