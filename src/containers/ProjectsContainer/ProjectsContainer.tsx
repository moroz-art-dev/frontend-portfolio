import React from 'react';

import Loader from '@components/common/Loader';

import {useApiData} from '@/hooks/useApiData';
import {ProjectApiResponse} from '@/types/project';

export const withProjects = <P extends ProjectApiResponse>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithProjects: React.FC<Omit<P, keyof ProjectApiResponse>> = props => {
    const {data, loading, error} =
      useApiData<ProjectApiResponse>('/api/projects');

    if (loading) return <Loader text='loadingProjects' />;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.list.length === 0)
      return <div>No projects available</div>;

    return (
      <WrappedComponent {...(props as P)} list={data.list} title={data.title} />
    );
  };

  return WithProjects;
};

export default withProjects;
