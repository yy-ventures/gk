import React from 'react';

import { HeroSection, WorkTogether } from '@/shared/components';
import { StorySection } from '@/components/Stories';

import { useFetch } from '@/shared/hook';

const Stories = async () => {
  const storyCategories = await useFetch({ url: '/story-categories', revalidateIn: 86400 });

  return (
    <>
      <HeroSection/>
      <StorySection stroyCategories={storyCategories.data}/>
      <WorkTogether/>
    </>
  );
};

export default Stories;
