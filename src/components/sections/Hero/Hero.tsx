import {useTranslations} from 'next-intl';

import {Avatar, Box, Grid, GridItem, Text, VStack} from '@chakra-ui/react';

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <Grid
      templateColumns={{base: '1fr', sm: '1fr 1fr', md: '1fr 2fr'}}
      gap={10}
    >
      <GridItem
        borderRadius='md'
        colSpan={1}
        display='flex'
        justifyContent='center'
      >
        <Box className={styles.avatarWrapper}>
          <Avatar
            className={styles.avatar}
            size={{base: '3xl', md: '3xl', lg: '3xl'}}
            name='Artem Moroz'
            src='/images/person.png'
          />
        </Box>
      </GridItem>
      <GridItem borderRadius='md' colSpan={1}>
        <VStack spacing={4} align='start'>
          <Text as='h2' className={styles.text}>
            {t('greetingTitle')}
          </Text>
          <Text className={styles.text}>{t('intro')}</Text>
          <Text className={styles.text}>{t('explore')}</Text>
          <Text className={styles.text}>{t('social')}</Text>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Hero;
