'use client';
import {GetServerSidePropsContext} from 'next';

import {ReactNode} from 'react';

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';

import {useCustomTheme} from '@hooks/useCustomTheme';

interface ThemeProviderProps {
  cookies?: string;
  children: ReactNode;
}

export function ThemeProvider({cookies, children}: ThemeProviderProps) {
  const theme = useCustomTheme();

  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      cookies: context.req.headers.cookie ?? '',
    },
  };
}
