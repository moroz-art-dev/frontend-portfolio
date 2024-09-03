import React from 'react';

import {Box, Spinner, Text} from '@chakra-ui/react';

import styles from './Loader.module.scss';

interface LoaderProps {
  text?: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({text}) => {
  return (
    <Box className={styles.loaderContainer}>
      <Spinner size='lg' color='teal.500' className={styles.spinner} />
      {text && <Text className={styles.text}>{text}</Text>}
    </Box>
  );
};

export default Loader;
