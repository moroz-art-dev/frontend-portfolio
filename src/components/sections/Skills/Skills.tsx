import React from 'react';

import {Box} from '@chakra-ui/react';

import CategorySection from '@components/common/CategorySection';

import styles from './Skills.module.scss';

import type {SkillApiResponse} from '@/types/skill';

const Skills: React.FC<SkillApiResponse> = ({list}) => {
  return (
    <Box className={styles.skills} mt={8}>
      {Object.entries(list).map(([category, subcategories]) => (
        <Box key={category}>
          <CategorySection sectionData={subcategories} />
        </Box>
      ))}
    </Box>
  );
};
export default Skills;
