'use client';

import React from 'react';

import Loader from '@components/common/Loader';
import Skills from '@components/sections/Skills';
import {useApiData} from '@hooks/useApiData';

import {SkillApiResponse} from '@/types/skill';

const SkillsContainer: React.FC = () => {
  const {data, loading, error} = useApiData<SkillApiResponse>('/api/stack');

  if (loading) return <Loader text='loadingSkills' />;

  if (error) return <div>Error: {error}</div>;

  if (!data) return <div>No skills available</div>;

  return <Skills list={data.list} title={data.title} />;
};

export default SkillsContainer;
