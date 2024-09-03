import {CertificateApiResponse} from '@/types/certificate';
import {Project, ProjectApiResponse} from '@/types/project';
import {SkillApiResponse} from '@/types/skill';
import {fetchData} from '@/utils/fetchData';

export const fetchProjectById = async (id: string): Promise<Project | null> => {
  const projects = await fetchProjects();
  return projects.list.find((project: Project) => project.id === id) || null;
};

export const fetchCertificates = async (): Promise<CertificateApiResponse> =>
  fetchData('/certificates/data_v1.json');

export const fetchProjects = async (): Promise<ProjectApiResponse> =>
  fetchData('/projects/data_v1.json');

export const fetchSkills = async (): Promise<SkillApiResponse> =>
  fetchData('/stack/data_v1.json');
