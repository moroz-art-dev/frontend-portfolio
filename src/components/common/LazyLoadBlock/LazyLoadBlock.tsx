'use client';

import React, {useEffect, useRef, useState} from 'react';

import {Box} from '@chakra-ui/react';

import Loader from '@components/common/Loader';

import styles from './LazyLoadBlock.module.scss';

interface LazyLoadBlockProps {
  children: React.ReactNode;
  initialMinHeight?: boolean;
}

const LazyLoadBlock = ({children}: LazyLoadBlockProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <Box ref={ref} className={styles.lazyLoadBlock}>
      {isVisible ? children : <Loader text='default' />}
    </Box>
  );
};

export default LazyLoadBlock;
