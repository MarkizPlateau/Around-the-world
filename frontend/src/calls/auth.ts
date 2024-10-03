import { makeClient } from '@/apollo/client';
import * as GraphQL from '@/graphql/generates/graphql';
import { GraphQLFormattedError } from 'graphql';

export type Credentials = Record<'username' | 'password', string> | undefined;

// TODO
// Temporary Apollo Errors
const ApolloErrors = (errors: readonly GraphQLFormattedError[]) => {
  return errors[0].message;
};

export async function registerUser({
  username,
  email,
  password,
}: GraphQL.UsersPermissionsRegisterInput) {
  const { data, errors } = await makeClient().mutate<
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
  if (errors) {
    console.error('GraphQL Errors:', errors);
    throw new Error(ApolloErrors(errors));
  }
  return data;
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
