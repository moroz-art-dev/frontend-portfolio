import {Flex, Spacer} from '@chakra-ui/react';

import LanguageSwitcher from '@components/common/LanguageSwitcher';
import MenuTop from '@components/common/MenuTop';
import SocialMediaIcons from '@components/common/SocialMediaIcons';
import ThemeSwitcher from '@components/common/ThemeSwitcher';

import styles from './DesktopNav.module.scss';

interface DesktopNavProps {
  items: Array<{labelKey: string; href: string}>;
}

const DesktopNav: React.FC<DesktopNavProps> = ({items}) => {
  return (
    <Flex as='nav' className={styles.nav}>
      <SocialMediaIcons />
      <Spacer />
      <Flex>
        <MenuTop items={items} />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </Flex>
    </Flex>
  );
};

export default DesktopNav;
