import {useTranslations} from 'next-intl';

import {Box, Stack} from '@chakra-ui/react';

import SectionHeader from '@components/common/SectionHeader';
import SkillCard from '@components/common/SkillCard';

interface Skill {
  title: string;
  descriptionKey: string;
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({skills}) => {
  const t = useTranslations('Skills');
  return (
    <Box overflowX='auto'>
      <SectionHeader text={t('title')} />
      <Stack
        gap='1rem'
        flexDirection='row'
        alignItems='flexStart'
        flexWrap='wrap'
        style={{justifyContent: 'center'}}
      >
        {skills.map((skill, index) => (
          <SkillCard
            index={index}
            key={index}
            title={skill.title}
            descriptionKey={skill.descriptionKey}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SkillList;
