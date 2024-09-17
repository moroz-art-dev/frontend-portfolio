import {useTranslations} from 'next-intl';

import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react';

import Categories from '@components/common/Categories';
import SkillList from '@components/common/SkillList';
import {categories} from '@config/categoriesConfig';
import {skills} from '@config/skillsConfig';

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const t = useTranslations('HomePage');

  return (
    <>
      <Container>
        <Grid
          templateColumns={{base: '1fr', sm: '2fr 1fr', md: '1fr 0.75fr  1fr'}}
          gap={10}
        >
          <GridItem borderRadius='md' colSpan={1}>
            <VStack spacing={4} align='start'>
              {/* <Text as='h2' className={styles.title}>
              {t('greetingTitle')}
            </Text> */}
              <Text className={styles.text}>{t('intro')}</Text>
              <Text className={styles.text}>{t('explore')}</Text>
              <Text className={styles.text}>{t('social')}</Text>
            </VStack>
          </GridItem>
          <GridItem
            borderRadius='md'
            colSpan={1}
            display='flex'
            justifyContent='center'
            alignItems='center'
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
              {/* <Text as='h2' className={styles.title}>
              {t('skillsTitle')}
            </Text> */}
              <Text className={styles.text}>{t('skillsIntro')}</Text>
              <Text className={styles.text}>{t('skillsExplore')}</Text>
            </VStack>
          </GridItem>
        </Grid>
        <SkillList skills={skills} />
        <Box mt={10}>
          <Text className={styles.text}>{t('aboutTechnologies')}</Text>
        </Box>
        <Categories categories={categories} />
      </Container>
    </>
  );
};

export default Hero;
