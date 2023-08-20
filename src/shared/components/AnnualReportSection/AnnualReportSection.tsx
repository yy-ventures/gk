import React from 'react';
import Image from 'next/image';

import bgImage from '@/assets/images/home/annual-section-bg.webp';

import style from './annualSection.module.scss';
import { IAnnualReportSection } from './annualReport.type';

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
  headingT,
  annualSectionT,
  contentContainerT
} = style;

const AnnualReportSection = ({ data, headingText, headingTop }: IAnnualReportSection) => {
  return (
    <div className={headingTop ? `${annualSection} ${annualSectionT}` : `${annualSection}`}>
      <h1 className={headingTop ? `${heading} ${headingT}` : `${heading}`}>{headingText}</h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={bgImage} alt='bg-img'/>
        </div>
        <div className={headingTop ? `${contentContainer} ${contentContainerT}` : `${contentContainer}`}>
          <div className={gridContainer}>
            {
              data?.map((item, index) => <div key={index} className={content}>
                <p className={text}>
                  <span className={number}>{item.value}+</span>
                  <span className={title}>{item.title}</span>
                </p>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportSection;
