import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './../styles/globals.css';
import { Providers } from './providers';
import LayoutWrapper from '@/wrappers/LayoutWrapper/LayoutWrapper';

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Around the world',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} h-screen w-screen`}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
