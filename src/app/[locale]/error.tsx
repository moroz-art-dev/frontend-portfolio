'use client';

import {useEffect} from 'react';

import {Box, Button, Heading, Text, VStack} from '@chakra-ui/react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <VStack spacing={6}>
        <Heading as='h2' size='2xl'>
          Что-то пошло не так!
        </Heading>
        <Text fontSize='xl'>При загрузке сертификатов произошла ошибка.</Text>
        <Button colorScheme='blue' onClick={() => reset()}>
          Попробовать снова
        </Button>
      </VStack>
    </Box>
  );
}
