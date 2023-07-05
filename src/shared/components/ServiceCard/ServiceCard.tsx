'use client';

import React from 'react';
import Image from 'next/image';

import { IServiceCardProps } from './serice.type';

import style from './serviceCard.module.scss';

const {
  serviceCard, mask, heading, imgContainer, img
} = style;

const ServiceCard = ({ service }: IServiceCardProps) => {
  return (
    <div className={serviceCard}>
      <div className={mask}>
        <h4 className={heading}>{service.title}</h4>
      </div>
      <div className={imgContainer}>
        <Image className={img} src={service.image} alt='service' width={100} height={100}/>
      </div>
    </div>
  );
};

export default ServiceCard;
