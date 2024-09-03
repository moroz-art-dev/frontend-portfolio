export interface Skill {
  name: string;
  iconUrl: string | null;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SkillApiResponse {
  title: string;
  list: SkillCategory[];
}

export interface SkillsProps {
  list: {
    [category: string]: {
      [subcategory: string]: string | {[skillName: string]: string};
    };
  };
  title: string;
}

export interface SkillCategoryProp {
  category: string;
  subcategories: {
    [subcategory: string]: string | {[skillName: string]: string};
  };
}
