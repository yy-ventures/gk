import React from 'react';

import { HeroSection, NewsletterSection } from '@/components/Newsletter';
import { WorkTogether } from '@/shared/components';
import { useFetch } from '@/shared/hook';

const heroData = {
  image: 'https://res.cloudinary.com/dboyf6lad/image/upload/v1692591523/1659420758_3-min_s2cdxp.jpg',
  title: 'Newsletters'
};

const Newsletter = async () => {
  const newsletters = await useFetch({ url: '/newsletter', revalidateIn: 86400 });

  return (
    <>
      <HeroSection data={heroData}/>
      <NewsletterSection data={newsletters.data}/>
      <WorkTogether/>
    </>
  );
};

export default Newsletter;
