import { client } from '@/apollo/client';
import * as GraphQL from '@/graphql/generates/graphql';

export type Credentials = Record<'username' | 'password', string> | undefined;

export async function registerUser({
  username,
  email,
  password,
}: GraphQL.UsersPermissionsRegisterInput) {
  const { data } = await client.mutate<GraphQL.RegisterMutation, GraphQL.RegisterMutationVariables>(
    {
      mutation: GraphQL.RegisterDocument,
      variables: {
        input: {
          username,
          email,
          password,
        },
      },
    },
  );
  return data;
}

export async function loginUser(input: Credentials) {
  const { data } = await client.mutate<GraphQL.LoginMutation, GraphQL.LoginMutationVariables>({
    mutation: GraphQL.LoginDocument,
    variables: {
      identifier: input?.username ?? '',
      password: input?.password ?? '',
    },
  });
  return data;
}

export async function forgotPassword({ email }: GraphQL.ForgotPasswordMutationVariables) {
  const { data } = await client.mutate<
    GraphQL.ForgotPasswordMutation,
    GraphQL.ForgotPasswordMutationVariables
  >({
    mutation: GraphQL.ForgotPasswordDocument,
    variables: {
      email,
    },
  });
  return data;
}

export async function resetPassword({
  password,
  passwordConfirmation,
  code,
}: GraphQL.ResetPasswordMutationVariables) {
  const { data } = await client.mutate<
    GraphQL.ResetPasswordMutation,
    GraphQL.ResetPasswordMutationVariables
  >({
    mutation: GraphQL.ResetPasswordDocument,
    variables: {
      password,
      passwordConfirmation,
      code,
    },
  });
  return data;
}
