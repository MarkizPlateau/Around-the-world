import { CustomSession } from '@/app/api/auth/[...nextauth]/authOptions';
import { useSession } from 'next-auth/react';

export const useCustomSession = () => {
  return useSession() as { data: CustomSession | null };
};

export default useCustomSession;
