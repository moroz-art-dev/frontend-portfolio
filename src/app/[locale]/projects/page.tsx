'use client';
import Projects from '@components/sections/Projects';
import withProjects from '@containers/ProjectsContainer';
import {useMetaData} from '@hooks/useMetaData';

const ProjectsWithData = withProjects(Projects);

function ProjectsPage() {
  useMetaData('ProjectsText');
  return <ProjectsWithData />;
}

export default ProjectsPage;
