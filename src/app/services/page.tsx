import React from 'react';

import { HeroSection } from '@/shared/components';
import { AreaWeServe, ServiceSection } from '@/components/Services';

const Services = () => {
  return (
    <>
      <HeroSection/>
      <AreaWeServe/>
      <ServiceSection/>
      <ServiceSection reverse={true}/>
    </>
  );
};

export default Services;
