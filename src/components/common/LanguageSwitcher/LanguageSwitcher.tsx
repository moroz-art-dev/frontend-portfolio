'use client';
import {usePathname, useRouter} from 'next/navigation';

import classNames from 'classnames';
import React from 'react';

import {useLocale, useTranslations} from 'next-intl';

import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';

import {languages} from '@config/languageConfig';

import styles from './LanguageSwitcher.module.scss';

import type {Locale} from '@/types/locale';

const LanguageSwitcher: React.FC = () => {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = locale || 'en';

  const handleLanguageChange = (lng: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${lng}`);
    router.push(newPathname);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant='ghost'
        className={styles.menuButton}
        style={{padding: '0 1rem'}}
      >
        {languages
          .find(lang => lang.code === currentLanguage)
          ?.shortLabel.toUpperCase()}
      </MenuButton>
      <MenuList>
        {languages.map(({code, label, shortLabel}) => (
          <MenuItem
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={classNames(styles.menuItem, {
              [styles.active]: code === currentLanguage,
            })}
          >
            {t(label)} ({shortLabel.toUpperCase()})
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
