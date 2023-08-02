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
import { reverseFilterDataByKey } from '@/shared/utils/pageHelpers/filterDataByKey.helper';

const About = async () => {
  const aboutUsData = await useFetch({ url: '/about-us-contents' });
  const summeryReportData = await useFetch({ url: '/summary-report-settings/basic', revalidateIn: 86400 });
  const ourProudPresenceData = await useFetch({ url: '/summary-report-settings/healthcare', revalidateIn: 86400 });
  const achievementData = await useFetch({ url: '/timeline', revalidateIn: 86400 });
  const boardMemberData = await useFetch({ url: '/members', revalidateIn: 86400 });

  const mission = aboutUsData.data[0].mission;
  const vision = aboutUsData.data[0].vision;

  const aboutSectionData = {
    heading: aboutUsData.data[0].company_intro_title,
    description: aboutUsData.data[0].company_intro_description
  };

  const annuallyReportData = reverseFilterDataByKey(summeryReportData.data, 'annually_we_serve');

  const empoweringSectionData = {
    title: aboutUsData.data[0].inception_title,
    details: aboutUsData.data[0].inception_details
  };

  const aboutGrameenKalyanSectionData = aboutUsData.data[0].presence_details;

  return (
    <>
      <HeroSection/>
      <MissionVision mission={mission} vision={vision}/>
      <ServiceSection/>
      <AboutUs data={aboutSectionData}/>
      <AnnualReportSection data={annuallyReportData} headingTop={true} headingText='Story of Inception'/>
      <EmpoweringSection empoweringData={empoweringSectionData}/>
      <OurProudSection proudPresenceData={ourProudPresenceData.data} headingText='Our Proud Presence' subHeadingText='Across the Country'/>
      <AboutGrameenKalyan aboutGkData={aboutGrameenKalyanSectionData}/>
      <AchievementSection achievementData={achievementData.data}/>
      <BoardMemberSection boardMembersData={boardMemberData.data} />
      <WorkTogether/>
    </>
  );
};

export default About;
