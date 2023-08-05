import React from 'react';

import { HeroSection, StoryShortDetail } from '@/components/Story';
import { RecentPost, WorkTogether } from '@/shared/components';

const Story = () => {
  return (
    <>
      <HeroSection/>
      <StoryShortDetail/>
      <RecentPost/>
      <WorkTogether/>
    </>
  );
};

export default Story;
