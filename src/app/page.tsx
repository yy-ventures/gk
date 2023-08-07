import React from 'react';

import { useFetch } from '@/shared/hook';
import { filterDataByKey, reverseFilterDataByKey } from '@/shared/utils/pageHelpers/filterData.helper';

import {
  HeroSection,
  AboutSection,
  BoardMember,
  AnnuallyServe,
  MicroHealthSection,
  StoriesSection
} from '@/components/Home';

import {
  ServiceSection, WorkTogether, AnnualReportSection
} from '@/shared/components';

const Home = async () => {
  const homePageContentData = await useFetch({ url: '/home-contents', revalidateIn: 86400 });
  const summeryReportData = await useFetch({ url: '/summary-report-settings/basic', revalidateIn: 86400 });
  const sliderImages = await useFetch({ url: '/home-slider-content', revalidateIn: 86400 });
  const storyCategory = await useFetch({ url: '/story-categories', revalidateIn: 86400 });

  const heroSliderImages = sliderImages.data;
  const badgeImage = homePageContentData.data[0].badge_image;

  const aboutSectionData = {
    title: homePageContentData.data[0].intro_title,
    subTitleOne: homePageContentData.data[0].intro_sub_title_one,
    subTitleTwo: homePageContentData.data[0].intro_sub_title_two
  };

  const boardMemberArray = [
    {
      id: 1,
      name: homePageContentData.data[0].chairman_name,
      description: homePageContentData.data[0].chairman_speech,
      designation: homePageContentData.data[0].chairman_designation,
      image: homePageContentData.data[0].chairman_thumb_image,
      reverse: false
    },
    {
      id: 2,
      name: homePageContentData.data[0].md_name,
      description: homePageContentData.data[0].md_speech,
      designation: homePageContentData.data[0].md_designation,
      image: homePageContentData.data[0].md_thumb_image,
      reverse: true
    }
  ];

  const annuallyWeServeData = filterDataByKey(summeryReportData.data, 'annually_we_serve');
  const annuallyReportData = reverseFilterDataByKey(summeryReportData.data, 'annually_we_serve');

  const microHealthData = homePageContentData.data[0].mhi_banner_image;

  return (
    <>
      <HeroSection badgeImage={badgeImage} sliderImages={heroSliderImages}/>
      <AboutSection data={aboutSectionData}/>
      <ServiceSection/>
      <BoardMember memberData={boardMemberArray}/>
      <AnnuallyServe data={annuallyWeServeData}/>
      <AnnualReportSection data={annuallyReportData} headingText='Annual'/>
      <MicroHealthSection image={microHealthData}/>
      <StoriesSection storyCategory={storyCategory.data}/>
      <WorkTogether/>
    </>
  );
};

export default Home;
