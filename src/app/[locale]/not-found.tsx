import Link from 'next/link';

import {Box, Button, Heading, Text, VStack} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box
      minHeight='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <VStack spacing={6}>
        <Heading as='h2' size='2xl'>
          Не найдено
        </Heading>
        <Text fontSize='xl'>
          Извините, мы не можем найти запрашиваемые сертификаты.
        </Text>
        <Link href='/' passHref>
          <Button as='a' colorScheme='blue'>
            Вернуться на главную
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}
