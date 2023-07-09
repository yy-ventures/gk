import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/home/home-hero-bg.webp';
import layoutImage from '@/assets/layout/layout-tr-small.svg';
import gloryImage from '@/assets/images/home/glory.svg';

import style from './heroSection.module.scss';

const {
  heroSection, bgImage, img, layout, glory, contentContainer, content, emptyBox, darkText, lightText
} = style;

const HeroSection = () => {
  return (
    <div className={heroSection}>
      <div className={bgImage}>
        <Image className={img} src={bgImg} alt='Background img'/>
      </div>
      <div className={layout}>
        <Image className={img} src={layoutImage} alt='layout'/>
      </div>
      <div className={glory}>
        <Image className={img} src={gloryImage} alt='glory'/>
      </div>
      <div className={contentContainer}>
        <div className={emptyBox}></div>
        <h1 className={content}>
          <span className={darkText}>স্বাস্থ</span>
          <span className={lightText}>সেবায়</span>
          <span className={darkText}>পাশেই আছি</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
