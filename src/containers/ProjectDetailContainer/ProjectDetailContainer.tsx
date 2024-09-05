'use client';
import React from 'react';

import ProjectDetail from '@components/sections/ProjectDetail';

import type {Project} from '@/types/project';

interface ProjectDetailContainerProps {
  project: Project;
}

const ProjectDetailContainer: React.FC<ProjectDetailContainerProps> = ({
  project,
}) => {
  const {
    id,
    imagesSrc,
    imagesSubcategorySrc,
    demo,
    title,
    url,
    description,
    feature,
    technologies,
  } = project;

  return (
    <ProjectDetail
      id={id}
      imagesSrc={imagesSrc}
      imagesSubcategorySrc={imagesSubcategorySrc}
      demo={demo}
      title={title}
      url={url}
      description={description}
      feature={feature}
      technologies={technologies}
    />
  );
};

export default ProjectDetailContainer;
