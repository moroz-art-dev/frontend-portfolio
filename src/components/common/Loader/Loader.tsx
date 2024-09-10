import React from 'react';

import {useTranslations} from 'next-intl';

import {Container, Spinner, Text} from '@chakra-ui/react';

import styles from './Loader.module.scss';

interface LoaderProps {
  text?: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({text}) => {
  const t = useTranslations('Loader');
  return (
    <Container className={styles.loaderContainer}>
      <Spinner size='lg' color='teal.500' className={styles.spinner} />
      {text && <Text className={styles.text}>{t(text)}</Text>}
    </Container>
  );
};

export default Loader;
