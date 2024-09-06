import {Box, Heading, Text} from '@chakra-ui/react';

const Info = () => {
  return (
    <Box
      bg='gray.100'
      p={4}
      borderRadius='md'
      boxShadow='sm'
      mt={8}
      textAlign='center'
    >
      <Heading as='h3' size='lg' mb={4}>
        Additional Information
      </Heading>
      <Text fontSize='md'>
        This section provides extra information relevant to the current page.
        Customize it as per the needs of the page, or include any additional
        content like instructions, tips, or contextual details.
      </Text>
    </Box>
  );
};

export default Info;
