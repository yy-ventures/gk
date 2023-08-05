import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/about/about-bg.webp';

import style from './recentPostCard.module.scss';

const {
  recentPostCard, container, imgContainer, contentContainer, title, img
} = style;

const RecentPostCard = () => {
  return (
    <div className={recentPostCard}>
      <div className={container}>
        <div className={imgContainer}>
          <Image className={img} src={bgImg} alt='card img'/>
        </div>
      </div>
      <div className={contentContainer}>
        <h3 className={title}>Micro Health Insurance</h3>
      </div>
    </div>
  );
};

export default RecentPostCard;
