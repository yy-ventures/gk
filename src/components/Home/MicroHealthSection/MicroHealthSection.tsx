import React from 'react';
import Image from 'next/image';

import { Button } from '@/shared/components';

import style from './microHealthSection.module.scss';

const {
  microHealthSection,
  heading,
  container,
  bgContainer,
  img,
  contentContainer
} = style;

interface IMicroHealthSectionProps {
  image: string
}

const MicroHealthSection = ({ image }: IMicroHealthSectionProps) => {
  return (
    <div className={microHealthSection}>
      <h1 className={heading}>
        <span> Micro Health</span>
        <span>Insurance</span>
      </h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={image} alt='bg-img' width={100} height={100}/>
        </div>
        <div className={contentContainer}>
          <Button text='Read More' url='#' btnSecondary={true}/>
        </div>
      </div>
    </div>
  );
};

export default MicroHealthSection;
