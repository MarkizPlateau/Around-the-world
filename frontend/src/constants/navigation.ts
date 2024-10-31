import { ROUTES } from './routes';

type Nagivation = {
  name: string;
  href: string;
  id: number;
}[];

export const NAVIGATION: Nagivation = [
  {
    name: 'News',
    href: ROUTES.NEWS,
    id: 1,
  },
  {
    name: 'List of events',
    href: ROUTES.LIST,
    id: 2,
  },
  { name: 'About us', href: ROUTES.ABOUT_US, id: 3 },
  { name: 'Contact', href: ROUTES.CONTACT, id: 4 },
];

// TODO
// export const PROFILE_DROPDOWN
