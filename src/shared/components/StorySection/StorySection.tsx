import React from 'react';
import Image from 'next/image';

import testImage from '@/assets/images/services/social-business.png';

import layoutBR from '@/assets/layout/layout-br.svg';

import style from './storySection.module.scss';

const {
  storySection,
  layout,
  img,
  headingContainer,
  heading,
  small,
  large,
  contentContainer,
  leftContent,
  content,
  imageContainer,
  rightContent,
  imgContainer
} = style;

const StorySection = () => {
  return (
    <div className={storySection}>
      <div className={layout}>
        <Image className={img} src={layoutBR} alt='layout' width={100} height={100}/>
      </div>
      <div className={headingContainer}>
        <h2 className={heading}>
          <span className={small}>Making Millions</span>
          <span className={large}>Smile</span>
        </h2>
      </div>
      <div className={contentContainer}>
        <h2 className={heading}>Stories</h2>
        <div className={leftContent}>
          <div className={content}>
            <p>Emergency Response</p>
            <div className={imgContainer}>
              <Image className={img} src={testImage} alt='stroy image'/>
            </div>
          </div>
          <div className={content}>
            <p>Fighting the Pandemic</p>
            <div className={imgContainer}>
              <Image className={img} src={testImage} alt='stroy image'/>
            </div>
          </div>
          <div className={content}>
            <p>Diagnosis is Key</p>
            <div className={imgContainer}>
              <Image className={img} src={testImage} alt='stroy image'/>
            </div>
          </div>
        </div>
        <div className={imageContainer}>
          <h1>Image here</h1>
        </div>
        <div className={rightContent}>
          <div className={content}>
            <p>Compliance is Priority</p>
            <div className={imgContainer}>
              <Image className={img} src={testImage} alt='stroy image'/>
            </div>
          </div>
          <div className={content}>
            <p>Mother and Child Care</p>
            <div className={imgContainer}>
              <Image className={img} src={testImage} alt='stroy image'/>
            </div>
          </div>
          <div className={content}>
            <p>Micro Health Insurance</p>
            <div className={imgContainer}>
              <Image className={img} src={testImage} alt='stroy image'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
