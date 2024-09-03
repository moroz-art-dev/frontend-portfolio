import React from 'react';

import {useLocale} from 'next-intl';

import {Image, Text} from '@chakra-ui/react';

import {IMAGE_BASE_URL, IMAGE_CERTIFICATES_URL} from '@config/constants';
import {useRotatingIndex} from '@hooks/useRotatingIndex';

import styles from './ImageDisplay.module.scss';

import type {Certificate} from '@/types/certificate';
import type {Locale} from '@/types/locale';

const ImageDisplay: React.FC<{list: Certificate[]}> = ({list}) => {
  const locale = useLocale() as Locale;
  const activeIndex = useRotatingIndex(list.length, 4000);

  return (
    <>
      <Image
        src={
          IMAGE_BASE_URL + IMAGE_CERTIFICATES_URL + list[activeIndex].imageSrc
        }
        alt={list[activeIndex].name[locale]}
        title={list[activeIndex].name[locale]}
        className={styles.image}
      />
      <Text>{list[activeIndex].name[locale]}</Text>
    </>
  );
};

export default ImageDisplay;
