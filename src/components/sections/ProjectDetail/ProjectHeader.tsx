import {useTranslations} from 'next-intl';

import {Divider, Heading, HStack, Text, VStack} from '@chakra-ui/react';

import ExternalLinks from '@components/common/ExternalLinks';
import LabelWithIcon from '@components/common/LabelWithIcon';

import styles from './ProjectHeader.module.scss';

interface ProjectHeaderProps {
  title: string;
  demo: string;
  url: string;
  description: string;
  feature: string;
  technologies: string[];
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  description,
  feature,
  url,
  demo,
  technologies,
}) => {
  const t = useTranslations('ProjectText');
  return (
    <>
      <HStack>
        <Heading as='h1' size='xl' className={styles.heading}>
          {title}
        </Heading>
        <ExternalLinks variant='outline' githubUrl={url} demoUrl={demo} />
      </HStack>
      <Divider mb={8} />
      <VStack align='start' gap={0}>
        <Text fontSize='lg' className={styles.description} mb={8}>
          {description}
        </Text>
        <Heading as='h2' size='lg' className={styles.heading}>
          {t('features')}:
        </Heading>
        <Divider mb={8} />
        <Text fontSize='lg' className={styles.feature} mb={8}>
          {feature}
        </Text>
        <Heading as='h2' size='lg' className={styles.heading}>
          {t('technologies')}:
        </Heading>
        <Divider mb={8} />
        <HStack spacing={2} wrap='wrap' className={styles.technologies} mb={4}>
          {technologies.map((name, index) => (
            <LabelWithIcon key={index} name={name} />
          ))}
        </HStack>
      </VStack>
    </>
  );
};

export default ProjectHeader;
