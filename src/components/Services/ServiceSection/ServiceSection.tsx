import React from 'react';
import Image from 'next/image';

import healthImage from '@/assets/images/services/health-care.webp';

import style from './serviceSection.module.scss';
import { Button } from '@/shared/components';

const {
  serviceSection,
  heading,
  imgContainer,
  contentContainer,
  img,
  subTitle,
  title,
  parag,
  headingReverse,
  contentContainerReverse,
  imgContainerReverse
} = style;

interface IServiceSectionProps {
  reverse?: boolean
}

const ServiceSection = ({ reverse }: IServiceSectionProps) => {
  return (
    <div className={serviceSection}>
      <h2 className={reverse ? `${heading} ${headingReverse}` : `${heading}`}>Healthcare</h2>
      <div className={reverse ? `${imgContainer} ${imgContainerReverse}` : `${imgContainer}`}>
        <Image className={img} src={healthImage} alt=''/>
      </div>
      <div className={reverse ? `${contentContainer} ${contentContainerReverse}` : `${contentContainer}`}>
        <h4 className={subTitle}>
          <span>Healthy and happy communities</span>
          <span>thrive to prosper eventually</span>
        </h4>
        <h3 className={title}>Healthcare at Doorsteps</h3>
        <p className={parag}>Grameen Kalyan has become known for delivering affordable primary healthcare through community-based health centres and outreach health programs among rural communities to reduce health inequalities in urban and rural areas.</p>
        <Button text='Learn More' url='#' btnSecondary/>
      </div>
    </div>
  );
};

export default ServiceSection;
