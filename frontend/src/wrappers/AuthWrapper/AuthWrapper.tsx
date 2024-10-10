import { useState, useEffect, ReactNode, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { CustomSession } from '@/app/api/auth/[...nextauth]/authOptions';
import { makeClient } from '@/apollo/client';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';

export function useAuth() {
  const { data } = useSession();
  const customSession = data as CustomSession | null;

  const [authToken, setAuthToken] = useState<string | undefined>(customSession?.jwt);

  useEffect(() => {
    setAuthToken(customSession?.jwt);
  }, [customSession?.jwt]);

  const getClient = useCallback(() => {
    return makeClient(authToken);
  }, [authToken]);

  return {
    getClient,
    isLogged: authToken !== undefined,
  };
}

export function AuthWrapper({ children }: { children: ReactNode }) {
  const { getClient } = useAuth();
  return <ApolloNextAppProvider makeClient={getClient}>{children}</ApolloNextAppProvider>;
}
