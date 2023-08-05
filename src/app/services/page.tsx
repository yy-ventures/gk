import React from 'react';

import { HeroSection } from '@/shared/components';
import { AreaWeServe, ServiceSection } from '@/components/Services';
import servicesData from '@/assets/data/service';

const Services = () => {
  return (
    <>
      <HeroSection/>
      <AreaWeServe/>
      {
        servicesData.map(data => {
          if (data.id % 2 === 0) {
            return <div key={data.id} id={data.navigate}>
              <ServiceSection serviceData={data} reverse={true}/>
            </div>;
          }

          return <div key={data.id} id={data.navigate}>
            <ServiceSection serviceData={data} key={data.id}/>
          </div>;
        })
      }
    </>
  );
};

export default Services;
