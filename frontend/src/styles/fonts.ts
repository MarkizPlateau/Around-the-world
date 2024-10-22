import { DynaPuff, Lato } from 'next/font/google';

export const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-lato' });

export const dynaPuff = DynaPuff({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dynaPuff',
});
