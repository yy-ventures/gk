'use client';

import React from 'react';
import Image from 'next/image';
import nextBase64 from 'next-base64';

import { Button } from '@/shared/components';
import { IService } from '@/shared/types/service';
import { IMAGE_BASE_URL } from '@/config';

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

  // const encodedId = nextBase64.encode(serviceData.id.toString());

  return (
    <div className={serviceSection}>
      <h2 className={reverse ? `${heading} ${headingReverse}` : `${heading}`}>{serviceData.title}</h2>
      <div className={reverse ? `${imgContainer} ${imgContainerReverse}` : `${imgContainer}`}>
        <Image className={img} src={IMAGE_BASE_URL + serviceData.servicepage_thumb_image} alt='' width={100} height={100} loader={() => IMAGE_BASE_URL + serviceData.servicepage_thumb_image}/>
      </div>
      <div className={reverse ? `${contentContainer} ${contentContainerReverse}` : `${contentContainer}`}>
        <h4 className={subTitle}>
          {
            slitSubtitleOne.map((text, index) => <span key={index}>{text}</span>)
          }
        </h4>
        <h3 className={title}>{serviceData.sub_title_two}</h3>
        <p className={parag}>{serviceData.short_description}</p>
        <Button text='Learn More' url={serviceData.title === 'Healthcare' ? '/healthcare' : `/services/${serviceData.id}`} btnSecondary/>
      </div>
    </div>
  );
};

export default ServiceCard;
