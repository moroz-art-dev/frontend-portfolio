import {useTranslations} from 'next-intl';

import {Box, Text, VStack} from '@chakra-ui/react';

import styles from './ExpertiseText.module.scss';

const ExpertiseText: React.FC = () => {
  const t = useTranslations('ExpertiseText');

  return (
    <Box className={styles.container}>
      <VStack spacing={4} align='start'>
        <Text as='h2' className={styles.title}>
          {t('intro')}
        </Text>
        <Text>{t('experience')}</Text>
        <Text>{t('focus')}</Text>
        <Text>{t('approach')}</Text>
      </VStack>
    </Box>
  );
};

export default ExpertiseText;
