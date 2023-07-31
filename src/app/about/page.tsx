import React from 'react';

import {
  MissionVision,
  AboutUs,
  EmpoweringSection,
  OurProudSection,
  AboutGrameenKalyan,
  AchievementSection,
  BoardMemberSection
} from '@/components/About';
import {
  HeroSection, ServiceSection, AnnualReportSection, WorkTogether
} from '@/shared/components';

import { useFetch } from '@/shared/hook';

const About = async () => {
  const data = await useFetch({ url: '/about-us-contents' });

  const mission = data.data[0].mission;
  const vision = data.data[0].vision;

  const aboutSectionData = {
    heading: data.data[0].company_intro_title,
    description: data.data[0].company_intro_description
  };

  return (
    <>
      <HeroSection/>
      <MissionVision mission={mission} vision={vision}/>
      <ServiceSection/>
      <AboutUs data={aboutSectionData}/>
      <AnnualReportSection headingTop={true} headingText='Story of Inception'/>
      <EmpoweringSection/>
      <OurProudSection headingText='Our Proud Presence' subHeadingText='Across the Country'/>
      <AboutGrameenKalyan/>
      <AchievementSection/>
      <BoardMemberSection/>
      <WorkTogether/>
    </>
  );
};

export default About;
