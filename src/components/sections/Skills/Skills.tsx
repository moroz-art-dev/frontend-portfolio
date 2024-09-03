import React from 'react';

import {Box} from '@chakra-ui/react';

import CategorySection from '@components/common/CategorySection';

import styles from './Skills.module.scss';

interface SkillsProps {
  list: {
    [category: string]: {
      [subcategory: string]: string | {[skillName: string]: string};
    };
  };
}

const Skills: React.FC<SkillsProps> = ({list}) => {
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
