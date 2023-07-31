import React from 'react';
import Image from 'next/image';

import testImage from '@/assets/images/lets-work.webp';
import { Button } from '../Button';

import style from './workTogether.module.scss';

const {
  workTogether, imgContainer, img, contentContainer, headingSmall, headingLarge, parag
} = style;

const WorkTogether = () => {
  return (
    <div className={workTogether}>
      <div className={imgContainer}>
        <Image className={img} src={testImage} alt='img'/>
      </div>
      <div className={contentContainer}>
        <h3 className={headingSmall}>Let's Work</h3>
        <h2 className={headingLarge}>Together</h2>
        <p className={parag}>
          Our promise is everyone at Bottom of the Pyramid will
          have equal access to standard healthcare. We welcome
          partnerships and collaboration to build a better future together.
        </p>
        <p className={parag}>
          Reach out to know more about partnership and collaboration opportunities.
        </p>
        <Button text='Join Us' url='/join-us' btnSecondary={true}/>
      </div>
    </div>
  );
};

export default WorkTogether;
