import React from 'react';
import Image from 'next/image';

import { ImageDisplay } from '@/shared/components/ImageDisplay';

import layoutBR from '@/assets/layout/layout-br.svg';

import { IStoriesSectionProps } from './StoriesSection.types';
import style from './storiesSection.module.scss';

const {
  storiesSection,
  layout,
  img,
  headingContainer,
  heading,
  small,
  large
} = style;

const StoriesSection = ({ storyCategory }: IStoriesSectionProps) => {
  return (
    <div className={storiesSection}>
      <div className={layout}>
        <Image className={img} src={layoutBR} alt='layout' width={100} height={100}/>
      </div>
      <div className={headingContainer}>
        <h2 className={heading}>
          <span className={small}>Making Millions</span>
          <span className={large}>Smile</span>
        </h2>
      </div>
      <ImageDisplay data={storyCategory}/>
    </div>
  );
};

export default StoriesSection;
