import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/about/about-bg.webp';

import style from './heroSection.module.scss';

const {
  heroSection, imageContainer, img, content, heading
} = style;

const HeroSection = () => {
  return (
    <div className={heroSection}>
      <div className={imageContainer}>
        <Image className={img} src={bgImg} alt='bg img'/>
      </div>
      <div className={content}>
        <h1 className={heading}>Fighting the Pandemic</h1>
      </div>
    </div>
  );
};

export default HeroSection;
