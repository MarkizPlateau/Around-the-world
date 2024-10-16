import { ROUTES } from './routes';

type Nagivation = {
  name: string;
  href: string | ((category: string) => string);
  id: number;
}[];

export const NAVIGATION: Nagivation = [
  {
    name: 'News',
    href: (category) => (category === 'festival' ? ROUTES.FESTIVAL.NEWS : ROUTES.ECO.NEWS),
    id: 1,
  },
  {
    name: 'List of events',
    href: (category) => (category === 'festival' ? ROUTES.FESTIVAL.LIST : ROUTES.ECO.LIST),
    id: 2,
  },
  { name: 'About us', href: ROUTES.ABOUT_US, id: 3 },
  { name: 'Contact', href: ROUTES.CONTACT, id: 4 },
];

// TODO
// export const PROFILE_DROPDOWN
