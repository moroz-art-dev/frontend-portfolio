'use client';

import {NextPageContext} from 'next';

import {ReactNode} from 'react';

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';

import {useCustomTheme} from '@hooks/useCustomTheme';
//import theme from '@styles/theme';

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

interface GetServerSidePropsContext extends NextPageContext {
  req: {
    headers: {
      cookie?: string;
    };
  };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      cookies: context.req.headers.cookie ?? '',
    },
  };
}
