'use client';

import Projects from '@components/sections/Projects';
import withProjects from '@containers/ProjectsContainer';

const ProjectsWithData = withProjects(Projects);

function ProjectsPage() {
  return <ProjectsWithData />;
}

export default ProjectsPage;
