import { Awaitable, DefaultSession, DefaultUser, NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { loginUser } from '@/calls/auth';
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
          return data as unknown as Awaitable<CustomJWTUser>;
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
