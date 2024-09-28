import React from 'react';

import {useTranslations} from 'next-intl';

import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

import ImageDisplay from '@components/common/ImageDisplay';

import {Link} from '@/navigation';
import {CertificateApiResponse} from '@/types/certificate';

import styles from './Expertise.module.scss';
import ExpertiseText from './ExpertiseText';

const Expertise: React.FC<CertificateApiResponse> = ({list}) => {
  const t = useTranslations('ExpertiseText');

  return (
    <Container as='section' className={styles.expertise}>
      <Heading as='h1' size='xl' className={styles.heading}>
        {t('title')}
      </Heading>
      <Divider />
      <Flex
        direction={{base: 'column', md: 'column', lg: 'row'}}
        justify='space-between'
        align='start'
        flexWrap='wrap'
        gap={4}
        my={8}
      >
        <Box className={styles.listWrapper}>
          <ExpertiseText />
        </Box>
        <Box className={styles.imageWrapper}>
          <VStack spacing={4} align='start'>
            <ImageDisplay list={list} />
          </VStack>
        </Box>
        <Box>
          <Text>
            {t('ongoingLearning')}{' '}
            <Link className={styles.link} href='/certificates'>
              {t('here')}
            </Link>
            .
          </Text>
        </Box>
      </Flex>
      <Heading as='h2' size='lg' className={styles.title}>
        {t('list')}
      </Heading>
      <Divider />
    </Container>
  );
};

export default Expertise;
