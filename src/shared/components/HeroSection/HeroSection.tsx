import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/about/about-bg.webp';
import layoutImg from '@/assets/layout/layout-tr-small.svg';

import style from './heroSection.module.scss';

const {
  heroSection, bgImageContainer, bgImage, content, heading, layoutContainer, layoutImage, juSubHeading, juHeading, juContent
} = style;

interface IHeroSectionProps {
   heroFor?: string
   backgroundImage?: string | any
}

const HeroSection = ({ heroFor, backgroundImage }: IHeroSectionProps) => {
  const isJoinUs = heroFor === 'join-us';

  if (isJoinUs) {
    return (
      <div className={heroSection}>
        <div className={bgImageContainer}>
          <img className={bgImage} src={backgroundImage || bgImg } alt='bg img'/>
        </div>
        <div className={`${content} ${juContent}`}>
          <h2 className={juSubHeading}>
            <span>How People & Culture Thrive In</span>
            <span>Grameen Kalyan</span>
          </h2>
          <h1 className={juHeading}>
            <span>Be inspired to serve the people</span>
            <span>across the nation</span>
          </h1>
          <div className={layoutContainer}>
            <Image className={layoutImage} src={layoutImg} alt='layout'/>
          </div>
        </div>
      </div>
    );
  }

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
