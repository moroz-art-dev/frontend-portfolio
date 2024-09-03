import {Box, Container, Text} from '@chakra-ui/react';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <Box as='footer' className={styles.footer}>
      <Container>
        <Text className={styles.text}>
          MorozArtDev • &copy; {new Date().getFullYear()}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
