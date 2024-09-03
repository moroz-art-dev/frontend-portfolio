import {Flex} from '@chakra-ui/react';

import MenuItem from './MenuItem';
import styles from './MenuTop.module.scss';

interface MenuProps {
  items: Array<{labelKey: string; href: string}>;
  onItemClick?: (href: string) => void;
}

const Menu: React.FC<MenuProps> = ({items, onItemClick}) => {
  return (
    <Flex className={styles.menu}>
      {items.map(({href, labelKey}, index) => (
        <MenuItem
          key={index}
          labelKey={labelKey}
          href={href}
          onClick={() => onItemClick?.(href)}
        />
      ))}
    </Flex>
  );
};

export default Menu;
