import React from 'react';
import Image from 'next/image';

import bgImg from '@/assets/images/about/about-bg.webp';

import style from './storyShortDetail.module.scss';
import { Button } from '@/shared/components';

const {
  storyDetail,
  imageContainer,
  img,
  divider,
  lineOne,
  lineTwo,
  box,
  contentContainer,
  heading,
  shortDesc,
  btnContainer
} = style;

const StoryShortDetail = () => {
  return (
    <div className={storyDetail}>
      <div className={imageContainer}>
        <Image className={img} src={bgImg} alt='img'/>
      </div>
      <div className={divider}>
        <div className={lineOne}/>
        <div className={box}/>
        <div className={lineTwo}/>
      </div>
      <div className={contentContainer}>
        <h2 className={heading}>Fighting the Pandemic</h2>
        <p className={shortDesc}>The coronavirus outbreak occurred worldwide at the end of 2019, and Bangladesh was hit by the deadly virus in March 2020. As the fast-spreading coronavirus claimed many lives and affected people countrywide, Grameen Kalyan did not place a...</p>
        <div className={btnContainer}>
          <Button text='Read More' url='#' btnSecondary/>
        </div>
      </div>
    </div>
  );
};

export default StoryShortDetail;
