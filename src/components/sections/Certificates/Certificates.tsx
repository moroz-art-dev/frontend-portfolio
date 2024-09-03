import React from 'react';

import {useLocale, useTranslations} from 'next-intl';

import {Box, Divider, Heading} from '@chakra-ui/react';

import {IMAGE_BASE_URL, IMAGE_CERTIFICATES_URL} from '@config/constants';

import CertificatesImages from './CertificatesImages';

import type {CertificateApiResponse} from '@/types/certificate';
import type {Locale} from '@/types/locale';

const Certificates: React.FC<CertificateApiResponse> = ({list, title}) => {
  const t = useTranslations('ExpertiseText');
  const locale = useLocale() as Locale;

  const images = list.map(item => ({
    imageSrc: `${IMAGE_BASE_URL}${IMAGE_CERTIFICATES_URL}${item.imageSrc}`,
    title: item.name[locale],
    name: item.name[locale],
    url: item.url,
    icon: item.icon,
  }));

  return (
    <Box as='section' id='certificates'>
      <Heading as='h1' size='xl'>
        {t('title')}
        {title[locale]}
      </Heading>
      <Divider />
      <CertificatesImages images={images} />
    </Box>
  );
};

export default Certificates;
