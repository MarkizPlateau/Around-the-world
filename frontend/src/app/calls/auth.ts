import { makeClient } from '@/apollo/client';
import * as GraphQL from '@/graphql/generates/graphql';

export type Credentials = Record<'username' | 'password', string> | undefined;

export async function registerUser({
  username,
  email,
  password,
}: GraphQL.UsersPermissionsRegisterInput) {
  try {
    const { data } = await makeClient().mutate<
      GraphQL.RegisterMutation,
      GraphQL.RegisterMutationVariables
    >({
      mutation: GraphQL.RegisterDocument,
      variables: {
        input: {
          username,
          email,
          password,
        },
      },
    });
    return data;
  } catch (error) {
    throw new Error('Registration attempt failed.');
  }
}

export async function loginUser(input: Credentials) {
  const { data } = await makeClient().mutate<GraphQL.LoginMutation, GraphQL.LoginMutationVariables>(
    {
      mutation: GraphQL.LoginDocument,
      variables: {
        email: input?.username ?? '',
        password: input?.password ?? '',
      },
    },
  );

  if (data?.login.user.confirmed) {
    return data;
  }
  return undefined;
}

export async function forgotPassword({ email }: GraphQL.ForgotPasswordMutationVariables) {
  try {
    const { data } = await makeClient().mutate<
      GraphQL.ForgotPasswordMutation,
      GraphQL.ForgotPasswordMutationVariables
    >({
      mutation: GraphQL.ForgotPasswordDocument,
      variables: {
        email,
      },
    });
    return data;
  } catch (error) {
    throw new Error('An attempt to send a password reset code failed.');
  }
}

export async function resetPassword({
  password,
  passwordConfirmation,
  code,
}: GraphQL.ResetPasswordMutationVariables) {
  try {
    const { data } = await makeClient().mutate<
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
  } catch (error) {
    throw new Error('An attempt to reset password failed.');
  }
}
