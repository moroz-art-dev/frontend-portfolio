export interface Translations {
  en: string;
  uk: string;
  ru: string;
}

export interface ProjectBase {
  id: string;
  url: string;
  demo: string;
}

export interface Project extends ProjectBase {
  title: Translations;
  description: Translations;
  technologies: string[];
  imagesSubcategorySrc: string;
  imagesSrc: string[];
}

export interface ProjectItemProps extends ProjectBase {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ProjectApiResponse {
  list: Project[];
  title: Translations;
}
