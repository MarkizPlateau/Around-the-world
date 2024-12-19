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
    news: {
      bgLight: 'white',
      bgDark: 'gray.800',
      textLight: 'gray.800',
      textDark: 'gray.100',
      borderLight: 'purple.200',
      borderDark: 'purple.500',
    },
  },
  shadows: {
    baseColor: '0 1px 3px 0 rgba(148, 31, 73, 0.1), 0 1px 2px 0 rgba(148, 31, 73, 0.06)',
    cardLight: 'lg',
    cardDark: 'dark-lg',
  },
  components: {
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        px: '3',
        py: '1',
        width: 'min-content',
        colorScheme: 'purple',
      },
    },
    Heading: {
      baseStyle: {
        color: 'purple.500',
        fontSize: '2xl',
      },
    },
  },
  fonts: {
    heading: 'var(--font-lato)',
    body: 'var(--font-lato)',
    puff: 'var(--font-dynaPuff)',
  },
});
