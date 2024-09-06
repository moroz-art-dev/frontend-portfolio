import _merge from 'lodash/merge';

import {extendTheme, type ThemeConfig} from '@chakra-ui/react';
import {GlobalStyleProps} from '@chakra-ui/theme-tools';

import {useFont} from '@contexts/FontContext';
import {breakpoints} from '@styles/breakpoints';
import {darkPalette, lightPalette} from '@styles/colors';
import {Button} from '@styles/components/button';
import {Container} from '@styles/components/container';
import {Divider} from '@styles/components/divider';
import {Heading} from '@styles/components/heading';
import {Tag as BaseTag} from '@styles/components/tag';
import {Tooltip} from '@styles/components/tooltip';
import {radii} from '@styles/radii';
import {sizes} from '@styles/sizes';
import {space} from '@styles/space';

export const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const useCustomTheme = () => {
  const {headingFont, bodyFont, specialFont, alternateFont, codeFont} =
    useFont();

  console.log('t', headingFont);

  const customTheme = extendTheme({
    config,
    colors: {
      light: lightPalette.colors,
      dark: darkPalette.colors,
    },
    breakpoints,
    space,
    sizes,
    radii: radii,
    fonts: {
      heading: headingFont,
      body: bodyFont,
      special: specialFont,
      alternate: alternateFont,
      code: codeFont,
    },
    styles: {
      global: (props: GlobalStyleProps) => {
        const currentColors =
          props.theme.colors[props.colorMode] || lightPalette.colors;

        return {
          ':root': {
            '--primary-color': currentColors.primary,
            '--secondary-color': currentColors.secondary,
            '--accent-color': currentColors.accent,
            '--accent-hover-color': currentColors.accentHover,
            '--accent-active-color': currentColors.accentActive,
            '--info-color': currentColors.info,
            '--info-hover-color': currentColors.infoHover,
            '--background-color': currentColors.background,
            '--text-color': currentColors.text,
            '--button-color': currentColors.button,
            '--button-hover-color': currentColors.buttonHover,
            '--button-active-color': currentColors.buttonActive,
            '--link-color': currentColors.link,
            '--link-hover-color': currentColors.linkHover,
            '--link-active-color': currentColors.linkActive,
            '--border-color': currentColors.border,
            '--header-background': currentColors.headerBackground,
            '--shadow-color': currentColors.shadow,
            '--shadow-header-color': currentColors.headerShadow,
            '--tag-bg': currentColors.accent,
            '--padding-background': space.backgroundPadding,
            '--height-header': sizes.headerHeight,
            '--font-heading': headingFont,
            '--font-body': bodyFont,
            '--font-special': specialFont,
            '--font-alternate': alternateFont,
            '--font-code': codeFont,
          },
          body: {
            bg: currentColors.button,
            color: currentColors.text,
            fontFamily: props.theme.fonts.body,
            fontSize: {
              base: '14px',
              md: '14px',
              lg: '16px',
              xl: '18px',
            },
            lineHeight: {
              // base: '1.5',
              // md: '1.6',
              // lg: '1.7',
              // xl: '1.8',
            },
          },
          h1: {
            fontSize: {base: '2xl', sm: '2xl', md: '3xl', lg: '4xl'},
            fontWeight: 600,
            textTransform: 'uppercase',
            '::first-letter': {
              color: 'var(--button-active-color)',
            },
          },
          h2: {
            fontSize: {base: 'xl', sm: 'xl', md: '2xl', lg: '3xl'},
            fontWeight: 400,
          },
          h3: {
            fontSize: {base: 'md', sm: 'md', md: 'lg', lg: '2xl'},
            fontWeight: 400,
          },
          h4: {
            fontSize: {base: 'sm', sm: 'sm', md: 'md', lg: 'lg'},
            fontWeight: 400,
          },
        };
      },
    },
    components: {
      Button,
      Heading,
      Tooltip,
      Tag: _merge({}, BaseTag, {
        baseStyle: {
          fontFamily: codeFont,
        },
      }),
      Divider,
      Container,
    },
  });

  return customTheme;
};
