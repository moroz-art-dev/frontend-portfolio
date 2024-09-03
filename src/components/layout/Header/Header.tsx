'use client';

import classNames from 'classnames';
import {useEffect, useState} from 'react';

import {Box, Container, useBreakpointValue} from '@chakra-ui/react';

import {menuItems, menuItemsMobile} from '@config/menuConfig';

import DesktopNav from './DesktopNav';
import styles from './Header.module.scss';
import MobileNav from './MobileNav';

const Header: React.FC = () => {
  const isDesktop = useBreakpointValue({base: false, md: true});
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('showed');
    } else {
      document.body.classList.remove('showed');
    }

    return () => {
      document.body.classList.remove('showed');
    };
  }, [showMenu]);

  const combinedMenuItems = [...menuItems, ...menuItemsMobile];

  return (
    <Box as='header' className={styles.header}>
      <Box
        className={classNames(styles.menu, {
          [styles.menuVisible]: showMenu,
          [styles.menuHidden]: !showMenu,
        })}
      >
        <Container className={styles.container}>
          {isDesktop ? (
            <DesktopNav items={menuItems} />
          ) : (
            <MobileNav items={combinedMenuItems} />
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
