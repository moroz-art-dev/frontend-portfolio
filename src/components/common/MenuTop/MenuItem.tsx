'use client';

import {usePathname} from 'next/navigation';

import classNames from 'classnames'; // Импортируем classnames

import {useTranslations} from 'next-intl';

import {Link} from '@/navigation';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
  labelKey: string;
  href: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({labelKey, href, onClick}) => {
  const t = useTranslations('Menu');
  const pathname = usePathname().replace(/^\/[a-z]{2}(\/|$)/, '/');
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={classNames(styles.menuItem, {[styles.active]: isActive})}
    >
      {t(labelKey)}
    </Link>
  );
};

export default MenuItem;
