import {useTranslations} from 'next-intl';

import {Text, VStack} from '@chakra-ui/react';

const ProjectsIntro: React.FC = () => {
  const t = useTranslations('ProjectsText');

  return (
    <VStack spacing={4} align='start'>
      <Text>{t('intro')}</Text>
      <Text>{t('experience')}</Text>
      <Text>{t('support')}</Text>
      <Text>{t('petProjects')}</Text>
    </VStack>
  );
};

export default ProjectsIntro;
