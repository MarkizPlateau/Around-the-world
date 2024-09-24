import { makeClient } from '@/apollo/client';
import { LoginDocument, LoginMutation, LoginMutationVariables } from '@/graphql/generates/graphql';

export type Credentials = Record<'username' | 'password', string> | undefined;

export async function loginUser(input: Credentials) {
  const { data } = await makeClient().mutate<LoginMutation, LoginMutationVariables>({
    mutation: LoginDocument,
    variables: {
      email: input?.username ?? '',
      password: input?.password ?? '',
    },
  });

  if (data?.login.user.confirmed) {
    return data;
  }
  return undefined;
}
