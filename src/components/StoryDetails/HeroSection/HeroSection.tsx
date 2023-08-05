import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/healthcare/grid-1.webp';

import style from './heroSection.module.scss';

const {
  storyDetail,
  bgImageContainer,
  bgImage,
  heading,
  textLarge,
  textSmall
} = style;

const HeroSection = () => {
  return (

    <div className={storyDetail}>
      <div className={bgImageContainer}>
        <Image className={bgImage} src={bgImg} alt='bg img'/>
      </div>
      <h1 className={heading}>
        <span className={textLarge}>With Joy</span>
        <span className={textSmall}>We Grow Together</span>
      </h1>
    </div>
  );
};

export default HeroSection;
