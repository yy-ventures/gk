import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/about/about-bg.webp';
import layoutImg from '@/assets/layout/layout-tr-small.svg';

import style from './heroSection.module.scss';

const {
  heroSection, bgImageContainer, bgImage, content, heading, layoutContainer, layoutImage
} = style;

const HeroSection = () => {
  return (
    <div className={heroSection}>
      <div className={bgImageContainer}>
        <Image className={bgImage} src={bgImg} alt='bg img'/>
      </div>
      <div className={content}>
        <h1 className={heading}>
          <span>With Joy</span>
          <span>We Grow Together</span>
          <span>We Serve Together</span>
        </h1>
        <div className={layoutContainer}>
          <Image className={layoutImage} src={layoutImg} alt='layout'/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
