import {useLocale, useTranslations} from 'next-intl';

import {Container, Divider, Heading} from '@chakra-ui/react';

import {IMAGE_BASE_URL} from '@config/constants';

import {Project} from '@/types/project';

import ProjectHeader from './ProjectHeader';
import ProjectImages from './ProjectImages';

import type {Locale} from '@/types/locale';

const ProjectDetail: React.FC<Project> = ({
  imagesSrc,
  imagesSubcategorySrc,
  demo,
  title,
  feature,
  url,
  description,
  technologies,
}) => {
  const locale = useLocale() as Locale;
  const t = useTranslations('ProjectText');
  const images = imagesSrc.map((src: string) => ({
    imageSrc: `${IMAGE_BASE_URL}${imagesSubcategorySrc}${src}`,
    title: title[locale],
  }));

  return (
    <Container as='section'>
      <ProjectHeader
        demo={demo}
        url={url}
        title={title[locale]}
        description={description[locale]}
        feature={feature[locale]}
        technologies={technologies}
      />
      <Heading as='h2' size='lg'>
        {t('screenshots')}:
      </Heading>
      <Divider mb={8} />
      <ProjectImages images={images} />
    </Container>
  );
};

export default ProjectDetail;
