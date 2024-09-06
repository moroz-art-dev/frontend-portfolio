import {Box, Stack} from '@chakra-ui/react';

import SkillCard from '@components/common/SkillCard';

interface Skill {
  title: string;
  descriptionKey: string;
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({skills}) => {
  return (
    <Box overflowX='auto' py={4}>
      <Stack
        gap='1rem'
        flexDirection='row'
        alignItems='flexStart'
        flexWrap='wrap'
        style={{justifyContent: 'space-evenly'}}
      >
        {skills.map((skill, index) => (
          <SkillCard
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
