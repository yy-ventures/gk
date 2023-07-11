import React from 'react';
import Image from 'next/image';

import bgImage from '@/assets/images/home/annual-section-bg.webp';

import style from './annualSection.module.scss';

const {
  annualSection,
  heading,
  container,
  bgContainer,
  img,
  contentContainer,
  content,
  gridContainer,
  text,
  number,
  title
} = style;

const AnnualSection = () => {
  return (
    <div className={annualSection}>
      <h1 className={heading}>Annual</h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={bgImage} alt='bg-img'/>
        </div>
        <div className={contentContainer}>
          <div className={gridContainer}>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualSection;
