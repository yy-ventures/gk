import React from 'react';

import style from './storySection.module.scss';
import { ImageDisplay } from '@/shared/components/ImageDisplay';
import { ICategory } from '@/shared/types/category';

const {
  storySection, heading, parag, storyDisplay
} = style;

interface IStorySectionProps{
  stroyCategories: ICategory[]
}

const StorySection = ({ stroyCategories }: IStorySectionProps) => {
  return (
    <>
      <div className={storySection}>
        <h2 className={heading}>
          <span>Effort Behind</span>
          <span>Thousand Real Stories</span>
        </h2>
        <p className={parag}>Since 1996, Grameen Kalyan has delivered affordable and quality primary healthcare to minimize health inequalities and economic setbacks. Our effort touched millions of people across the country and became a part of their journey of well-being.</p>
      </div>
      <div className={storyDisplay}>
        <ImageDisplay data={stroyCategories}/>
      </div>
    </>
  );
};

export default StorySection;
