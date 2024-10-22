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
  fonts: {
    heading: 'var(--font-lato)',
    body: 'var(--font-lato)',
  },
});
