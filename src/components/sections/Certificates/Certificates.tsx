import React from 'react';

import {useLocale} from 'next-intl';

import {Container, Divider, Heading} from '@chakra-ui/react';

import {IMAGE_BASE_URL, IMAGE_CERTIFICATES_URL} from '@config/constants';

import CertificatesImages from './CertificatesImages';

import type {CertificateApiResponse} from '@/types/certificate';
import type {Locale} from '@/types/locale';

const Certificates: React.FC<CertificateApiResponse> = ({list, title}) => {
  const locale = useLocale() as Locale;

  const images = list.map(item => ({
    imageSrc: `${IMAGE_BASE_URL}${IMAGE_CERTIFICATES_URL}${item.imageSrc}`,
    title: item.name[locale],
    name: item.name[locale],
    url: item.url,
    icon: item.icon,
  }));

  return (
    <Container as='section'>
      <Heading as='h1' size='xl'>
        {title[locale]}
      </Heading>
      <Divider />
      <CertificatesImages images={images} />
    </Container>
  );
};

export default Certificates;
