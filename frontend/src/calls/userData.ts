import * as GraphQL from '@/graphql/generates/graphql';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export async function updateUser(
  client: ApolloClient<NormalizedCacheObject>,
  { id, userData }: GraphQL.UpdateUsersPermissionsUserMutationVariables,
) {
  const { data } = await client.mutate<
    GraphQL.UpdateUsersPermissionsUserMutation,
    GraphQL.UpdateUsersPermissionsUserMutationVariables
  >({
    mutation: GraphQL.UpdateUsersPermissionsUserDocument,
    variables: {
      id,
      userData,
    },
  });
  return data;
}

export async function getUserData(client: ApolloClient<NormalizedCacheObject>) {
  const { data } = await client.query<GraphQL.MeQuery>({
    query: GraphQL.MeDocument,
  });
  return {
    id: data?.me?.id ?? '',
    username: data?.me?.username ?? '',
    email: data?.me?.email ?? '',
  };
}
