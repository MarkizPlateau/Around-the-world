'use client';

import { useContext, useEffect, useState, createContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export const useNavigationContext = () => useContext(NavigationContext);

const NavigationContext = createContext<ReturnType<typeof useNavigation>>({
  previousRoute: null,
});

const { HOME, ACCOUNT_CONFIRMATION, FORGOT_PASSWORD, RESET_PASSWORD, REGISTER } = ROUTES;
const redirectRoutes = [ACCOUNT_CONFIRMATION, FORGOT_PASSWORD, RESET_PASSWORD, REGISTER];

const useNavigation = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [previousRoute, setPreviousRoute] = useState<string | null>(null);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    setPreviousRoute(currentRoute);
    if (redirectRoutes.includes(pathname)) {
      setCurrentRoute(HOME);
    } else {
      setCurrentRoute(url);
    }
  }, [pathname, searchParams]);

  return { previousRoute };
};

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation();
  return <NavigationContext.Provider value={navigation}>{children}</NavigationContext.Provider>;
};
