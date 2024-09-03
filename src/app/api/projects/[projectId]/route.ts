import {NextResponse} from 'next/server';

import {fetchProjects} from '@lib/api';

import {Project} from '@/types/project';

export async function GET(
  request: Request,
  {params}: {params: {projectId: string}}
) {
  try {
    const data = await fetchProjects();

    const project = data.list.find(
      (project: Project) => project.id === params.projectId
    );

    if (!project) {
      return NextResponse.json({error: 'Project not found'}, {status: 404});
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json({error: 'An error occurred'}, {status: 500});
  }
}
