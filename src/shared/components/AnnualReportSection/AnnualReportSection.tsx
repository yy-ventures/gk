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

const AnnualReportSection = ({ headingText, headingTop }: IAnnualReportSection) => {
  return (
    <div className={headingTop ? `${annualSection} ${annualSectionT}` : `${annualSection}`}>
      <h1 className={headingTop ? `${heading} ${headingT}` : `${heading}`}>{headingText}</h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={bgImage} alt='bg-img'/>
        </div>
        <div className={headingTop ? `${contentContainer} ${contentContainerT}` : `${contentContainer}`}>
          <div className={gridContainer}>
            <div className={content}>
              <p className={text}>
                <span className={number}>315000+</span>
                <span className={title}>Primary Diagnosis</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>460263+</span>
                <span className={title}>Doctor Consultation</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>302565+</span>
                <span className={title}>Access to Medicine</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>2356582+</span>
                <span className={title}>Door to Door Visit</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>29410+</span>
                <span className={title}>Health Camps</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>58587+</span>
                <span className={title}>Digital Healthcare</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>33000+</span>
                <span className={title}>Vaccination & Immunisation</span>
              </p>
            </div>
            <div className={content}>
              <p className={text}>
                <span className={number}>73000+</span>
                <span className={title}>Micro Health Insurance</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportSection;
