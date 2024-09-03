import {VStack} from '@chakra-ui/react';

import MenuItem from './MenuItem';

interface MenuProps {
  items: Array<{labelKey: string; href: string}>;
  onItemClick?: (href: string) => void;
}

const Menu: React.FC<MenuProps> = ({items, onItemClick}) => {
  return (
    <VStack spacing={4} align='start'>
      {items.map(({href, labelKey}, index) => (
        <MenuItem
          key={index}
          labelKey={labelKey}
          href={href}
          onClick={() => onItemClick?.(href)}
        />
      ))}
    </VStack>
  );
};

export default Menu;
