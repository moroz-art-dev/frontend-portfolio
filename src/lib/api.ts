import {CertificateApiResponse} from '@/types/certificate';
import {Project, ProjectApiResponse} from '@/types/project';
import {SkillApiResponse} from '@/types/skill';
import {fetchData} from '@/utils/fetchData';

export const fetchProjectById = async (id: string): Promise<Project | null> => {
  try {
    const projects = await fetchProjects();

    if (!projects || !Array.isArray(projects.list)) {
      console.error('Invalid project data:', projects);
      return null;
    }

    const project = projects.list.find((project: Project) => project.id === id);

    if (!project) {
      console.warn(`Project with id ${id} not found`);
    }

    return project || null;
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    return null;
  }
};

export const fetchCertificates = async (): Promise<CertificateApiResponse> =>
  fetchData('/certificates/data_v1.json');

export const fetchProjects = async (): Promise<ProjectApiResponse> =>
  fetchData('/projects/data_v1.json');

export const fetchSkills = async (): Promise<SkillApiResponse> =>
  fetchData('/stack/data_v1.json');
