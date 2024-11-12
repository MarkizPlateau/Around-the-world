import { getCustomSession } from '@/hooks';
import { from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const httpLink = (headers?: Record<string, string>) => {
  // Check whether the application is running in Docker
  const uri = process.env.BACKEND_INTERNAL_URL
    ? typeof window === 'undefined'
      ? `${process.env.BACKEND_INTERNAL_URL}/graphql`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`
    : `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`;

  return new HttpLink({
    uri,
    fetchOptions: { cache: 'no-store' },
    headers: headers,
  });
};

export function makeClient(jwt?: string | undefined) {
  const headers: Record<string, string> = {};
  if (jwt) {
    headers['Authorization'] = 'Bearer ' + jwt;
  }
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink(headers)]),
  });
}

export const client = makeClient();

export const useClientWithGetSession = async () => {
  const session = await getCustomSession();
  const client = makeClient(session.jwt);
  return client;
};
