import { ROUTES } from './routes';

type Nagivation = {
  name: string;
  href: string | ((category: string) => string);
  current: boolean;
  id: number;
}[];

export const NAVIGATION: Nagivation = [
  {
    name: 'News',
    href: (category) => (category === 'festival' ? ROUTES.FESTIVAL.NEWS : ROUTES.ECO.NEWS),
    current: true,
    id: 1,
  },
  {
    name: 'List of events',
    href: (category) => (category === 'festival' ? ROUTES.FESTIVAL.LIST : ROUTES.ECO.LIST),
    current: false,
    id: 2,
  },
  { name: 'About us', href: ROUTES.ABOUT_US, current: false, id: 3 },
  { name: 'Contact', href: ROUTES.CONTACT, current: false, id: 4 },
];

// TODO
// export const PROFILE_DROPDOWN
