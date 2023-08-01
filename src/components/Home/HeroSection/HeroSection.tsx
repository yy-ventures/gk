import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/home/home-hero-bg.webp';
import bgImgTwo from '@/assets/images/healthcare/grid-1.webp';
import bgImgThree from '@/assets/images/services/health-care.webp';
import layoutImage from '@/assets/layout/layout-tr-small.svg';
import gloryImage from '@/assets/images/home/glory.svg';
import titleImage from '@/assets/images/home/title.svg';
import { Sliders } from '@/shared/components';

import { IHeroSectionProps } from './HeroSection.types';
import style from './heroSection.module.scss';

const {
  heroSection,
  bgImage,
  img,
  layout,
  glory,
  contentContainer,
  content,
  emptyBox,
  imgContainer,
  imgOne,
  imgTwo,
  imgThree
} = style;

const HeroSection = ({ badgeImage, sliderImages }: IHeroSectionProps) => {
  console.log('badgeImage: ', badgeImage);
  console.log('sliderImages: ', sliderImages);

  return (
    <div className={heroSection}>
      <div className={bgImage}>
        <Sliders
          infinite={true}
          slideShow={1}
          slideToShowMob={1}
          autoPlay={true}
          autoplaySpeed={3000}
        >
          <div className={`${imgContainer} ${imgOne}`}>
            <Image className={img} src={bgImg} alt='Background img'/>
          </div>
          <div className={`${imgContainer} ${imgTwo}`}>
            <Image className={img} src={bgImgTwo} alt='Background img'/>
          </div>
          <div className={`${imgContainer} ${imgThree}`}>
            <Image className={img} src={bgImgThree} alt='Background img'/>
          </div>
        </Sliders>
      </div>
      <div className={layout}>
        <Image className={img} src={layoutImage} alt='layout'/>
      </div>
      <div className={glory}>
        <Image className={img} src={gloryImage} alt='glory'/>
      </div>
      <div className={contentContainer}>
        <div className={emptyBox}></div>
        <div className={content}>
          <div className={imgContainer}>
            <Image className={img} src={titleImage} alt='title'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
