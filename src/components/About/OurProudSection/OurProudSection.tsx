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

const AnnualReportSection = ({ headingText, subHeadingText }: IOurProudSection) => {
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
            <div className={content}>
              <p className={text}>
                <span className={number}>144</span>
                <span className={title}>Health Centers</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>30</span>
                <span className={title}>Districts</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>7</span>
                <span className={title}>Divisions</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>4900</span>
                <span className={title}>Villages</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportSection;
