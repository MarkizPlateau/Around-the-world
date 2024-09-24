import { Awaitable, DefaultSession, DefaultUser, NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

import { loginUser } from '@/app/calls/auth';
import { JWT } from 'next-auth/jwt';

export interface CustomJWTUser extends DefaultUser {
  jwt: string;
  user: {
    id: number;
  };
}

export type customToken = JWT & {
  jwt: string;
  id: number;
};

export interface CustomSession extends DefaultSession {
  jwt: string;
  id: number;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'Adres email' },
        password: { label: 'Hasło', type: 'password' },
      },
      authorize: async (credentials) => {
        const data = await loginUser(credentials);
        if (data) {
          return { user: data.login } as unknown as Awaitable<CustomJWTUser>;
        } else {
          throw Error('Dane logowania są niepoprawane');
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  debug: true,
  callbacks: {
    jwt: async ({ token, user, trigger }) => {
      const isUser = !!user;
      if (isUser && trigger === 'signIn') {
        const customUser = user as CustomJWTUser;
        token.jwt = customUser.jwt;
        token.id = customUser.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      const customSession = session as CustomSession;
      const customToken = token as customToken;

      customSession.jwt = customToken.jwt;
      customSession.id = customToken.id;
      return customSession as CustomSession;
    },
  },
};
