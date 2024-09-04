import {notFound} from 'next/navigation';

import ProjectDetailContainer from '@containers/ProjectDetailContainer';
import {fetchProjectById} from '@lib/api';
import {getMetaData} from '@utils/getMetaData';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const meta = await getMetaData(params.locale, 'ProjectText');

  return {
    title: meta.title,
    description: meta.description,
  };
}

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
