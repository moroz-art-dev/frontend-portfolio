import {Divider, Flex, Heading} from '@chakra-ui/react';

import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({text}) => {
  return (
    <Flex
      align='center'
      justify='center'
      py={4}
      my={6}
      className={styles.wrapper}
    >
      <Divider
        flexGrow={1}
        className={styles.divider}
        width={['15%', 'auto']}
      />
      <Heading
        as='h2'
        size='md'
        mx={4}
        className={styles.title}
        whiteSpace={['normal', 'nowrap']}
      >
        {text}
      </Heading>
      <Divider
        flexGrow={1}
        className={styles.divider}
        width={['15%', 'auto']}
      />
    </Flex>
  );
};

export default SectionHeader;
