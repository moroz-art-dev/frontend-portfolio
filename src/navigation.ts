import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en', 'uk', 'ru'] as const;
export const localePrefix = 'always';

export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});
