import React from 'react';

import {
  HeroSection,
  AboutSection,
  BoardMember,
  AnnuallyServe,
  AnnualSection,
  MicroHealthSection
} from '@/components/Home';
import { ServiceSection, StorySection, WorkTogether } from '@/shared/components';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <BoardMember/>
      <AnnuallyServe/>
      <AnnualSection/>
      <MicroHealthSection/>
      <StorySection/>
      <WorkTogether/>
    </>
  );
};

export default Home;
