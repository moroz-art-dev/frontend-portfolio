import NextLink from 'next/link';

import styles from './ExternalLink.module.scss';

interface ExternalLinkProps {
  url: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({url, children}) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <NextLink
      href={url}
      passHref
      onClick={handleClick}
      target='_blank'
      className={styles.link}
    >
      {children}
    </NextLink>
  );
};

export default ExternalLink;
