import React from 'react';

import { HeroSection, WorkTogether } from '@/shared/components';
import { HealthcareService, MapSection, MedicalCare } from '@/components/Healthcare';

const Healthcare = () => {
  return (
    <>
      <HeroSection/>
      <HealthcareService/>
      <MapSection/>
      <MedicalCare/>
      <WorkTogether/>
    </>
  );
};

export default Healthcare;
