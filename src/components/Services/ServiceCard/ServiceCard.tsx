import React from 'react';
import Image from 'next/image';

import healthImage from '@/assets/images/services/health-care.webp';
import { Button } from '@/shared/components';
import { IService } from '@/shared/types/service';

import style from './serviceCard.module.scss';

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
  serviceData: IService
}

const ServiceCard = ({ reverse, serviceData }: IServiceSectionProps) => {
  const slitSubtitleOne = serviceData.sub_title_one.split('/');

  return (
    <div className={serviceSection}>
      <h2 className={reverse ? `${heading} ${headingReverse}` : `${heading}`}>{serviceData.title}</h2>
      <div className={reverse ? `${imgContainer} ${imgContainerReverse}` : `${imgContainer}`}>
        <Image className={img} src={healthImage} alt=''/>
      </div>
      <div className={reverse ? `${contentContainer} ${contentContainerReverse}` : `${contentContainer}`}>
        <h4 className={subTitle}>
          {
            slitSubtitleOne.map((text, index) => <span key={index}>{text}</span>)
          }
        </h4>
        <h3 className={title}>{serviceData.sub_title_two}</h3>
        <p className={parag}>{serviceData.short_description}</p>
        <Button text='Learn More' url={serviceData.title === 'healthcare' ? '/healthcare' : '#'} btnSecondary/>
      </div>
    </div>
  );
};

export default ServiceCard;
