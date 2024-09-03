import {notFound} from 'next/navigation';

import ProjectDetailContainer from '@containers/ProjectDetailContainer';
import {fetchProjectById} from '@lib/api';

export async function generateStaticParams() {
  const {fetchProjects} = await import('@lib/api');
  const projects = await fetchProjects();
  return projects.list.map(project => ({
    projectId: project.id,
  }));
}

async function ProjectPage({params}: {params: {projectId: string}}) {
  const project = await fetchProjectById(params.projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContainer project={project} />;
}

export default ProjectPage;
