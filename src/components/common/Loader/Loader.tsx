import React from 'react';

import {Container, Spinner, Text} from '@chakra-ui/react';

import styles from './Loader.module.scss';

interface LoaderProps {
  text?: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({text}) => {
  return (
    <Container className={styles.loaderContainer}>
      <Spinner size='lg' color='teal.500' className={styles.spinner} />
      {text && <Text className={styles.text}>{text}</Text>}
    </Container>
  );
};

export default Loader;
