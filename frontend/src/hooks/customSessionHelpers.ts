import { getServerSession } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';
import { authOptions, CustomSession } from '@/app/api/auth/[...nextauth]/authOptions';

export const getCustomServerSession = async (): Promise<CustomSession> => {
  const session = (await getServerSession(authOptions)) as CustomSession;
  return session;
};

export const useCustomSession = () => {
  return useSession() as { data: CustomSession | null };
};

export const getCustomSession = async (): Promise<CustomSession> => {
  const session = (await getSession()) as CustomSession;
  return session;
};

const customSessionHelpers = {
  getCustomServerSession,
  useCustomSession,
  getCustomSession,
};

export default customSessionHelpers;
