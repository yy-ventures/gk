import React from 'react';
import Image from 'next/image';

import bgImage from '@/assets/images/home/annual-section-bg.webp';

import style from './microHealthSection.module.scss';
import { Button } from '@/shared/components';

const {
  microHealthSection,
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

const MicroHealthSection = () => {
  return (
    <div className={microHealthSection}>
      <h1 className={heading}>
        <span> Micro Health</span>
        <span>Insurance</span>
      </h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={bgImage} alt='bg-img'/>
        </div>
        <div className={contentContainer}>
          <Button text='Read More' url='#' btnSecondary={true}/>
        </div>
      </div>
    </div>
  );
};

export default MicroHealthSection;
