import React from 'react';

import {
  HeroSection,
  AboutSection,
  BoardMember,
  AnnuallyServe,
  MicroHealthSection,
  StorySection
} from '@/components/Home';

import {
  ServiceSection, WorkTogether, AnnualReportSection
} from '@/shared/components';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <BoardMember/>
      <AnnuallyServe/>
      <AnnualReportSection headingText='Annual'/>
      <MicroHealthSection/>
      <StorySection/>
      <WorkTogether/>
    </>
  );
};

export default Home;
