import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';

import {HStack, IconButton, Tooltip} from '@chakra-ui/react';

import styles from './ExternalLinks.module.scss';

interface ExternalLinksProps {
  variant?: string;
  githubUrl: string;
  demoUrl: string;
}

const ExternalLinks: React.FC<ExternalLinksProps> = ({
  variant,
  githubUrl,
  demoUrl,
}) => {
  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <HStack className={styles.icons}>
      <Tooltip label='GitHub repository'>
        <IconButton
          variant={variant ? variant : 'ghost'}
          fontSize={18}
          as='a'
          href={githubUrl}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub repository'
          icon={<FaGithub />}
          className={styles.icon}
          onClick={handleIconClick}
        />
      </Tooltip>
      <Tooltip label='Live demo'>
        <IconButton
          variant={variant ? variant : 'ghost'}
          fontSize={18}
          as='a'
          href={demoUrl}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Live demo'
          icon={<FaExternalLinkAlt />}
          className={styles.icon}
          onClick={handleIconClick}
        />
      </Tooltip>
    </HStack>
  );
};

export default ExternalLinks;
