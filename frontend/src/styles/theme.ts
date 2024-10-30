import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  colors: {
    main: '#c62e65',
    mainDark: '#941f49',
    purpleDark: '#b811b8',
    dark: '#384359',
  },
  shadows: {
    baseColor: '0 1px 3px 0 rgba(148, 31, 73, 0.1), 0 1px 2px 0 rgba(148, 31, 73, 0.06)',
  },
  fonts: {
    heading: 'var(--font-lato)',
    body: 'var(--font-lato)',
    puff: 'var(--font-dynaPuff)',
  },
});
