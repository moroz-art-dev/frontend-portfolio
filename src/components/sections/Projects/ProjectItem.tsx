import {useRouter} from 'next/navigation';

import Image from 'next/image';

import {Box, Heading} from '@chakra-ui/react';

import ExternalLinks from '@components/common/ExternalLinks';

import styles from './ProjectItem.module.scss';

import type {ProjectItemProps} from '@/types/project';

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  title,
  imageSrc,
  url,
  demo,
}) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <Box className={styles.projectItem} onClick={handleNavigate}>
      <Box className={styles.projectImage}>
        <Image
          width='300'
          height='300'
          src={imageSrc}
          alt={title}
          className={styles.projectImage}
        />
      </Box>
      <Box className={styles.projectContent}>
        <Heading as='h4' size='sm' className={styles.projectTitle}>
          {title}
        </Heading>
        <ExternalLinks githubUrl={url} demoUrl={demo} variant='outline' />
      </Box>
    </Box>
  );
};

export default ProjectItem;
