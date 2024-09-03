import {useLocale, useTranslations} from 'next-intl';

import {Box, Divider, Grid, Heading, VStack} from '@chakra-ui/react';

import {IMAGE_BASE_URL} from '@config/constants';

import ProjectItem from './ProjectItem';
import styles from './Projects.module.scss';
import ProjectsIntro from './ProjectsIntro';

import type {Locale} from '@/types/locale';
import type {ProjectApiResponse} from '@/types/project';

const Projects: React.FC<ProjectApiResponse> = ({title, list}) => {
  const locale = useLocale() as Locale;
  const t = useTranslations('ProjectsText');
  return (
    <Box as='section' className={styles.projects} id='projects'>
      <Heading as='h1' className={styles.heading}>
        {title[locale]}
      </Heading>
      <Divider />
      <VStack className={styles.container} align='flex-start' my={8}>
        <ProjectsIntro />
      </VStack>
      <Heading as='h3' size='lg' className={styles.heading}>
        {t('titlePet')}:
      </Heading>
      <Divider mt={2} />
      <VStack className={styles.container} align='flex-start' my={8}>
        <Grid
          className={styles.grid}
          templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
        >
          {list &&
            list.map(project => (
              <ProjectItem
                demo={project.demo}
                url={project.url}
                id={project.id}
                key={project.id}
                title={project.title[locale]}
                description={project.description[locale]}
                imageSrc={`${IMAGE_BASE_URL}${project.imagesSubcategorySrc}${project.imagesSrc[0]}`}
              />
            ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Projects;
