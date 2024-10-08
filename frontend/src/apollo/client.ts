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

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  fetchOptions: { cache: 'no-store' },
});

export function makeClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
  });
}

export const client = makeClient();
