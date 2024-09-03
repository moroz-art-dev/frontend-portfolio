import React from 'react';

import {List, ListItem} from '@chakra-ui/react';

import styles from './ItemList.module.scss';

interface Item {
  name: string;
}

const ItemList: React.FC<{
  items: Item[];
  activeIndex: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}> = ({items, activeIndex, onMouseEnter, onMouseLeave}) => {
  return (
    <List spacing={3} className={styles.list}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
          className={`${styles.listItem} ${index === activeIndex ? styles.active : ''}`}
        >
          {item.name}
        </ListItem>
      ))}
    </List>
  );
};

export default ItemList;
