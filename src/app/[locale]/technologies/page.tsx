'use client';
import dynamic from 'next/dynamic';

import {Box} from '@chakra-ui/react';

import LazyLoadBlock from '@components/common/LazyLoadBlock';
import Loader from '@components/common/Loader';
import Expertise from '@components/sections/Expertise';
import {useMetaData} from '@hooks/useMetaData';

const ExpertiseWithData = dynamic(
  () =>
    import('@containers/CertificatesContainer').then(mod =>
      mod.default(Expertise)
    ),
  {
    ssr: false,
    loading: () => <Loader text='Loading Expertise...' />,
  }
);

const SkillsContainer = dynamic(() => import('@containers/SkillsContainer'), {
  ssr: false,
  loading: () => <Loader text='Loading Skills...' />,
});

function ExpertisePage() {
  useMetaData('ExpertiseText');
  return (
    <Box>
      <LazyLoadBlock>
        <ExpertiseWithData />
      </LazyLoadBlock>
      <LazyLoadBlock>
        <SkillsContainer />
      </LazyLoadBlock>
    </Box>
  );
}

export default ExpertisePage;
