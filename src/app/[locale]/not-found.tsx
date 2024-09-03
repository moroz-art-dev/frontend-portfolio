import Link from 'next/link';

import {Box, Button, Heading, VStack} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <VStack spacing={6}>
        <Heading as='h2' size='2xl'></Heading>

        <Link href='/' passHref>
          <Button as='a'>Back</Button>
        </Link>
      </VStack>
    </Box>
  );
}
