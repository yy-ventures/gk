import React from 'react';
import Image from 'next/image';

import bgImage from '@/assets/images/home/annual-section-bg.webp';

import style from './ourProudSection.module.scss';
import { IOurProudSection } from './ourProudSection.type';

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
  title,
  subHeading
} = style;

const OurProudSection = ({ proudPresenceData, headingText, subHeadingText }: IOurProudSection) => {
  return (
    <div className={annualSection}>
      <h1 className={heading}>
        <span>{headingText}</span>
        <span className={subHeading}>{subHeadingText}</span>
      </h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={bgImage} alt='bg-img'/>
        </div>
        <div className={contentContainer}>
          <div className={gridContainer}>
            {
              proudPresenceData.map(data => <div key={data.id} className={content}>
                <p className={text}>
                  <span className={number}>{data.value}</span>
                  <span className={title}>{data.title}</span>
                </p>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProudSection;
