import { Awaitable, DefaultSession, DefaultUser, NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginUser } from '@/calls/auth';
import { JWT } from 'next-auth/jwt';

export interface CustomJWTUser extends DefaultUser {
  jwt: string;
  user: {
    id: string;
    username: string;
  };
}

export type customToken = JWT & {
  jwt: string;
  user: {
    id: string;
    username: string;
  };
};

export interface CustomSession extends DefaultSession {
  jwt: string;
  user: {
    id: string;
    username: string;
  } & DefaultSession['user'];
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email lub nazwa użytkownika',
          type: 'text',
          placeholder: 'Adres email lub nazwa użytkownika',
        },
        password: { label: 'Hasło', type: 'password' },
      },
      authorize: async (credentials) => {
        const data = await loginUser(credentials);
        if (data?.login.user.confirmed) {
          return data?.login as unknown as Awaitable<CustomJWTUser>;
        }
        return null;
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
      const customToken = token as customToken;
      if (isUser && trigger === 'signIn') {
        const customUser = user as CustomJWTUser;
        customToken.jwt = customUser.jwt;
        customToken.user = customToken.user || {};
        customToken.user.id = customUser.user.id;
        customToken.user.username = customUser.user.username;
      }
      return customToken;
    },
    session: async ({ session, token }) => {
      const customSession = session as CustomSession;
      const customToken = token as customToken;

      customSession.jwt = customToken.jwt;
      customSession.user = customToken.user;

      return customSession as CustomSession;
    },
  },
};
