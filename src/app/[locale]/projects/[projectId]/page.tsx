import {notFound} from 'next/navigation';

import ProjectDetailContainer from '@containers/ProjectDetailContainer';
import {fetchProjectById} from '@lib/api';

async function ProjectPage({params}: {params: {projectId: string}}) {
  try {
    const project = await fetchProjectById(params.projectId);

    if (!project) {
      return notFound();
    }

    return <ProjectDetailContainer project={project} />;
  } catch (error) {
    console.error('Error in ProjectPage:', error);
    return notFound();
  }
}

export default ProjectPage;
