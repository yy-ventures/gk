import React from 'react';
import Image from 'next/image';

import { ImageDisplay } from '@/shared/components/ImageDisplay';
import layoutL from '@/assets/layout/health-left-leaf.svg';
import layoutR from '@/assets/layout/health-right-up-leaf.svg';

import style from './medicalCare.module.scss';

const {
  medicalCare, contentContainer, heading, parag, layoutLeft, layoutRight, img
} = style;

const MedicalCare = () => {
  return (
    <div className={medicalCare}>
      <div className={contentContainer}>
        <div className={layoutLeft}>
          <Image className={img} src={layoutL} alt='layout'/>
        </div>
        <div className={layoutRight}>
          <Image className={img} src={layoutR} alt='layout'/>
        </div>
        <h2 className={heading}>
          <span>Disease Specific</span>
          <span>Medical Care</span>
        </h2>
        <p className={parag}>To ensure comprehensive primary healthcare, our disease specific medical care lays on these areas, for patients to choose from</p>
      </div>
      {/* <ImageDisplay/> */}
    </div>
  );
};

export default MedicalCare;
