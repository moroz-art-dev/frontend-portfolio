import {useTranslations} from 'next-intl';

import {
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Link,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';

import {socialMediaLinks} from '@config/socialMediaConfig';

import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const t = useTranslations('Contact');

  return (
    <Container as='section' className={styles.contact}>
      <Heading as='h1' className={styles.heading}>
        {t('greetingTitle')}
      </Heading>
      <Divider />
      <Grid
        templateColumns={['1fr', '1fr']}
        gap={6}
        className={styles.container}
      >
        <GridItem>
          <VStack align='start' spacing={4}>
            <Text className={styles.text}>{t('intro')}</Text>
            {socialMediaLinks.map(
              ({href, ariaLabel, icon: Icon, text}, index) => (
                <HStack key={index} spacing={2}>
                  <Tooltip label={ariaLabel}>
                    <IconButton
                      variant='solid'
                      as='a'
                      href={href}
                      aria-label={ariaLabel}
                      icon={<Icon />}
                      className={styles.iconButton}
                      target='_blank'
                    />
                  </Tooltip>
                  <Text>{ariaLabel} :</Text>
                  <Link href={href} isExternal className={styles.link}>
                    {text}
                  </Link>
                </HStack>
              )
            )}
          </VStack>
        </GridItem>
        {/* <GridItem>
          <Image
            width={300}
            height={300}
            src='/images/person.jpg'
            alt='Profile Image'
            className={styles.image}
          />
        </GridItem> */}
      </Grid>
    </Container>
  );
};

export default Contact;
