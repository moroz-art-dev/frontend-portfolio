import {SkillCategory, SkillCategoryProp, SkillsProps} from '@/types/skill';

export const transformSkillsArrayToObject = (
  skillsArray: SkillCategory[]
): SkillsProps['list'] => {
  return skillsArray.reduce(
    (acc, skillCategory) => {
      const subcategories: SkillCategoryProp['subcategories'] = {};

      skillCategory.skills.forEach(skill => {
        subcategories[skill.name] = skill.iconUrl || '';
      });

      acc[skillCategory.category] = subcategories;
      return acc;
    },
    {} as SkillsProps['list']
  );
};
