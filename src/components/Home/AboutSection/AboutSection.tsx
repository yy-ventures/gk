import React from 'react';
import Image from 'next/image';

import layoutImage from '@/assets/layout/layout-br.svg';

import style from './aboutSection.module.scss';

const {
  aboutSection, content, heading, subHeading, layout, img
} = style;

const AboutSection = () => {
  return (
    <div className={aboutSection}>
      <div className={content}>
        <h2 className={heading}>25+ Years</h2>
        <h4 className={subHeading}>of Delivering Affordable Healthcare
          to Rural Doorsteps Across Bangladesh
        </h4>
      </div>
      <div className={layout}>
        <Image className={img} src={layoutImage} alt='layout'/>
      </div>
    </div>
  );
};

export default AboutSection;
