import React from 'react';

import {Text} from '@chakra-ui/react';

import styles from './TextBlock.module.scss';

const TextBlock: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Text mt={4} className={styles.text}>
      {children}
    </Text>
  );
};

export default TextBlock;
