import {
  fetchCertificates,
  fetchProjectById,
  fetchProjects,
  fetchSkills,
} from './api';

type ApiFunctionParams =
  | {
      [key: string]: string | number | boolean | undefined;
    }
  | undefined;

type ApiFunction =
  | typeof fetchCertificates
  | typeof fetchProjects
  | typeof fetchSkills
  | typeof fetchProjectById;

export async function fetchApiData<T>(
  apiFunction: ApiFunction,
  params?: any
): Promise<T> {
  try {
    const data = await apiFunction(params);
    return data as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
}
