const generateRoutes = (category: string) => ({
  NEWS: `/${category}/news`,
  LIST: `/${category}/list`,
  MAP: `/${category}/map`,
  DETAILS: (id: number) => `${category}/id-${id}`,
});

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/my-profile',
  ABOUT_US: '/about-us',
  CONTACT: '/contact',
  ECO: generateRoutes('eco'),
  FESTIVAL: generateRoutes('festival'),
};
