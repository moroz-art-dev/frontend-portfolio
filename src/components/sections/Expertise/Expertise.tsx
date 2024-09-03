import React from 'react';

import {useTranslations} from 'next-intl';

import {Box, Divider, Flex, Heading, Text, VStack} from '@chakra-ui/react';

import ImageDisplay from '@components/common/ImageDisplay';

import {Link} from '@/navigation';
import {CertificateApiResponse} from '@/types/certificate';

import styles from './Expertise.module.scss';
import ExpertiseText from './ExpertiseText';

const Expertise: React.FC<CertificateApiResponse> = ({list}) => {
  const t = useTranslations('ExpertiseText');

  return (
    <Box as='section' className={styles.expertise} id='certificates'>
      <Heading as='h1' size='xl' className={styles.heading}>
        {t('title')}
      </Heading>
      <Divider />
      <Flex
        direction={{base: 'column', md: 'column', lg: 'row'}}
        justify='space-between'
        align='start'
        flexWrap='wrap'
        gap={2}
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
    </Box>
  );
};

export default Expertise;
