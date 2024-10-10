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
  return new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
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
