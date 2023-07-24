import React from 'react';

import { HeroSection, TeamGrid, TeamGroup } from '@/shared/components';
import { PeopleCulture } from '@/components/Corporate';

const Corporate = () => {
  return (
    <>
      <HeroSection/>
      <PeopleCulture/>
      <TeamGroup headingTextOne='Management' headingTextTwo='Leadership'/>
      <TeamGrid/>
      <TeamGroup headingTextOne='Management' headingTextTwo='Leadership' marginTop/>
    </>
  );
};

export default Corporate;
