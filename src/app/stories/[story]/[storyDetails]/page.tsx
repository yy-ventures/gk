import React from 'react';

import { HeroSection, DetailSection, CommentSection } from '@/components/StoryDetails';
import { RecentPost, WorkTogether } from '@/shared/components';

const StoryDetails = () => {
  return (
    <>
      <HeroSection/>
      <DetailSection/>
      <CommentSection/>
      <RecentPost/>
      <WorkTogether/>
    </>
  );
};

export default StoryDetails;
