'use client';

import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components';
import { ROUTES } from '@/constants/routes';

export default function LayoutWrapper({ children }: PropsWithChildren) {
  const path = usePathname();

  return (
    <>
      {path !== ROUTES.HOME && <Header />}
      {path === ROUTES.HOME ? (
        <>{children}</>
      ) : (
        <main className="relative mx-auto max-w-screen-2xl px-5 2xl:px-2">{children}</main>
      )}
    </>
  );
}
