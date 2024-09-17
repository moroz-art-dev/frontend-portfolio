interface Category {
  title: string;
  descriptionKey: string;
  url: string;
}

export const categories: Category[] = [
  {
    title: 'projects',
    descriptionKey: 'projectsDescription',
    url: '/projects',
  },
  {
    title: 'certificates',
    descriptionKey: 'certificatesDescription',
    url: '/certificates',
  },
  {
    title: 'technologies',
    descriptionKey: 'technologiesDescription',
    url: '/technologies',
  },
];
