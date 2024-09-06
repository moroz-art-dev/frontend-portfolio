import {Box, Container} from '@chakra-ui/react';

import styles from './Info.module.scss';

interface InfoProps {
  children: React.ReactNode;
}

const Info: React.FC<InfoProps> = ({children}) => {
  return (
    <Box className={styles.info}>
      <Container>{children}</Container>
    </Box>
  );
};

export default Info;
