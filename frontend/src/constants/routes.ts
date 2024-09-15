const generateRoutes = (category: string) => ({
  ROOT: `/${category}`,
  SIGN_IN: `/${category}/sign-in}`,
  REGISTER: `/${category}/register}`,
  FORGOT_PASSWORD: `/${category}/forgot-password`,
  RESET_PASSWORD: `/${category}/reset-password`,
  DETAILS: (id: number) => `${category}/id-${id}`,
});

export const ROUTES = {
  HOME: '/',
  ECO: generateRoutes('eco'),
  EVENTS: generateRoutes('events'),
};
