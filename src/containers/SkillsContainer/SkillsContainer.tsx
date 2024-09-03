'use client';

import React from 'react';

import Loader from '@components/common/Loader';
import Skills from '@components/sections/Skills';
import {useApiData} from '@hooks/useApiData';
import {transformSkillsArrayToObject} from '@utils/transformSkills';

import {SkillApiResponse} from '@/types/skill';

const SkillsContainer: React.FC = () => {
  const {data, loading, error} = useApiData<SkillApiResponse>('/api/stack');

  if (loading) return <Loader text='Loading skills...' />;

  if (error) return <div>Error: {error}</div>;

  if (!data || data.list.length === 0) return <div>No skills available</div>;
  const transformedSkills = transformSkillsArrayToObject(data.list);
  return <Skills list={transformedSkills} title={data.title} />;
};

export default SkillsContainer;
