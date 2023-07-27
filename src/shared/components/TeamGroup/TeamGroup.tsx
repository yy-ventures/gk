import React from 'react';
import Image from 'next/image';

import bgImage from '@/assets/images/home/annual-section-bg.webp';

import style from './teamGroup.module.scss';
import { ITeamGroup } from './teamGroup.type';

const {
  annualSection,
  heading,
  container,
  bgContainer,
  img,
  annualSectionT
} = style;

const TeamGroup = ({ headingTextOne, headingTextTwo, marginTop }: ITeamGroup) => {
  return (
    <div className={marginTop ? `${annualSection} ${annualSectionT}` : `${annualSection}`}>
      <h1 className={heading}>
        <span>{headingTextOne}</span>
        <span>{headingTextTwo}</span>
      </h1>
      <div className={container}>
        <div className={bgContainer}>
          <Image className={img} src={bgImage} alt='bg-img'/>
        </div>
      </div>
    </div>
  );
};

export default TeamGroup;
