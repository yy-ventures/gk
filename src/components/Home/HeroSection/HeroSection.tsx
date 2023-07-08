import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/home/home-hero-bg.webp';

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
      <div className={layout}></div>
      <div className={glory}></div>
      <div className={contentContainer}>
        <div className={emptyBox}></div>
        <h1 className={content}>
          <span className={darkText}>আমি</span>
          <span className={lightText}>বাংলায়</span>
          <span className={darkText}>লেখা</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
