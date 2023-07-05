import React from 'react';
import Image from 'next/image';

import healthcare from '@/assets/images/services/DSC_1195.png';

import style from './serviceCard.module.scss';

const {
  service, mask, heading, imgContainer, img
} = style;

const ServiceCard = () => {
  return (
    <div className={service}>
      <div className={mask}>
        <h4 className={heading}>healthcare</h4>
      </div>
      <div className={imgContainer}>
        <Image className={img} src={healthcare} alt='service'/>
      </div>
    </div>
  );
};

export default ServiceCard;
