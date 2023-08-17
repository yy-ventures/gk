import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/about/about-bg.webp';
import layoutImg from '@/assets/layout/layout-tr-small.svg';

import style from './heroSection.module.scss';

const {
  heroSection,
  bgImageContainer,
  bgImage,
  content, heading,
  layoutContainer,
  layoutImage,
  juSubHeading,
  juHeading,
  juContent,
  healthcareContent,
  healthcareSubHeading,
  healthcareHeading,
  storyHeading,
  storyContent
} = style;

interface IHeroSectionProps {
   heroFor?: string
   backgroundImage?: string
   titleOne?: string
   titleTwo?: string
   titleThree?: string
}

const HeroSection = ({
  heroFor, backgroundImage, titleOne, titleTwo, titleThree
}: IHeroSectionProps) => {
  const isJoinUs = heroFor === ('join-us' || 'search');
  const isHealthcare = heroFor === 'healthcare';
  const isStory = heroFor === 'story';

  if (isJoinUs) {
    return (
      <div className={heroSection}>
        <div className={bgImageContainer}>
          <Image className={bgImage} src={backgroundImage || bgImg} alt='bg img' width={10000} height={10000}/>
        </div>
        <div className={`${content} ${juContent}`}>
          <h1 className={juSubHeading}>
            <span>How People & Culture Thrive In</span>
            <span>Grameen Kalyan</span>
          </h1>
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
  if (isHealthcare) {
    return (
      <div className={heroSection}>
        <div className={bgImageContainer}>
          <Image className={bgImage} src={backgroundImage || bgImg} alt='bg img' width={10000} height={10000}/>
        </div>
        <div className={`${content} ${healthcareContent}`}>
          <h1 className={healthcareSubHeading}>
            <span>Serving People with</span>
            <span>Empathy</span>
          </h1>
          <h1 className={healthcareHeading}>
            <span>Quality &</span>
            <span>Trust</span>
          </h1>
          <div className={layoutContainer}>
            <Image className={layoutImage} src={layoutImg} alt='layout'/>
          </div>
        </div>
      </div>
    );
  }
  if (isStory) {
    return (
      <div className={heroSection}>
        <div className={bgImageContainer}>
          <Image className={bgImage} src={backgroundImage || bgImg} alt='bg img' width={10000} height={10000}/>
        </div>
        <div className={`${content} ${storyContent}`}>
          <h1 className={storyHeading}>
            <span>{titleOne}</span>
            <span>{titleTwo}</span>
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
        <Image className={bgImage} src={backgroundImage || bgImg} alt='bg img' width={1000} height={1000}/>
      </div>
      <div className={content}>
        <h1 className={heading}>
          <span>{titleOne}</span>
          <span>{titleTwo}</span>
          <span>{titleThree}</span>
        </h1>
        <div className={layoutContainer}>
          <Image className={layoutImage} src={layoutImg} alt='layout'/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
