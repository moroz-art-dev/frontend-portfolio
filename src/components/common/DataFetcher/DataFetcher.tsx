import {Box, Text} from '@chakra-ui/react';

import {fetchCertificates, fetchProjects, fetchSkills} from '@lib/api';
import {fetchApiData} from '@lib/serverApi';

type DataFetcherProps<T> = {
  apiFunction: 'certificates' | 'projects' | 'skills';
  render: (data: T) => React.ReactNode;
};

const apiFunctions = {
  certificates: fetchCertificates,
  projects: fetchProjects,
  skills: fetchSkills,
};

async function DataFetcher<T>({apiFunction, render}: DataFetcherProps<T>) {
  try {
    const data = await fetchApiData<T>(apiFunctions[apiFunction]);
    return <Box>{render(data)}</Box>;
  } catch (error) {
    return (
      <Box textAlign='center' p={4}>
        <Text fontSize='lg' color='red.500'>
          Error loading data: {String(error)}
        </Text>
      </Box>
    );
  }
}

export default DataFetcher;
