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
