const generateRoutes = (category: string) => ({
  NEWS: `/${category}/news`,
});

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  ACCOUNT_CONFIRMATION: '/account-confirmation',
  PROFILE: '/my-profile',
  ABOUT_US: '/about-us',
  CONTACT: '/contact',
  LIST: '/list',
  NEWS: '/news',
  ECO: generateRoutes('eco'),
  FESTIVAL: generateRoutes('events'),
};
