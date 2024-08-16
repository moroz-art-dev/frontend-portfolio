import {extendTheme, type ThemeConfig} from '@chakra-ui/react';

const lightPalette = {
  colors: {
    primary: '#fdf9fa',
    primaryDark: '#f8e5e8',
    secondary: '#f0f5f9',
    accent: '#b8e2e0',
    background: '#ffffff',
    text: '#4a4a4a',
    button: '#a2c2e6',
    buttonHover: '#8bb1d6',
    buttonActive: '#7a9ac4',
  },
};

const darkPalette = {
  colors: {
    primary: '#6b4c4c',
    primaryDark: '#f8e5e8',
    secondary: '#8e7d7d',
    accent: '#b59380',
    background: '#2b2b2b',
    text: '#e0e0e0',
    button: '#3182ce',
    buttonHover: '#2b6cb0',
    buttonActive: '#2b4481',
  },
};

const spacing = {
  small: '8px',
  medium: '16px',
  large: '24px',
  backgroundPadding: 'max(20px, 4vmin)',
};

const sizes = {
  headerHeight: 'calc(40px + 2*max(20px, 4vmin))',
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    light: lightPalette.colors,
    dark: darkPalette.colors,
  },
  fonts: {
    heading: `'Montserrat Alternates', sans-serif`,
    body: `'Montserrat Alternates', sans-serif`,
  },
  space: spacing,
  sizes: sizes,
  styles: {
    global: (props: any) => ({
      ':root': {
        '--primary-color': props.theme.colors[props.colorMode].primary,
        '--secondary-color': props.theme.colors[props.colorMode].secondary,
        '--accent-color': props.theme.colors[props.colorMode].accent,
        '--background-color': props.theme.colors[props.colorMode].background,
        '--text-color': props.theme.colors[props.colorMode].text,
        '--button-color': props.theme.colors[props.colorMode].button,
        '--button-hover-color': props.theme.colors[props.colorMode].buttonHover,
        '--button-active-color':
          props.theme.colors[props.colorMode].buttonActive,
        '--padding-small': spacing.small,
        '--padding-medium': spacing.medium,
        '--padding-large': spacing.large,
        '--padding-background': spacing.backgroundPadding,
        '--height-header': sizes.headerHeight,
      },
      body: {
        bg: props.theme.colors[props.colorMode].primaryDark,
        //bg: darkenColor(props.theme.colors[props.colorMode].primary, -0.05),
        color: props.theme.colors[props.colorMode].text,
        //fontFamily: 'Montserrat Alternates, sans-serif',
      },
    }),
  },
  components: {
    IconButton: {
      color: 'red',
      bg: 'red',
    },
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        outline: {
          bg: 'transparent',
          border: 'none',
          padding: 0,
          height: 'auto',
          color: 'var(--text-color)',
          _hover: {
            bg: 'transparent',
            color: 'var(--secondary-color)',
          },
          _active: {
            bg: 'transparent',
            color: 'var(--accent-color)',
          },
        },
        link: {},
        // solid: {
        //   bg: 'button',
        //   color: 'white',
        //   _hover: {
        //     bg: 'buttonHover',
        //   },
        //   _active: {
        //     bg: 'buttonActive',
        //   },
        // },
      },
    },
  },
});

export default theme;
