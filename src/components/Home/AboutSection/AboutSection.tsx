import React from 'react';
import Image from 'next/image';

import layoutImage from '@/assets/layout/layout-br.svg';

import style from './aboutSection.module.scss';
import { IAboutdata } from './aboutData.type';

const {
  aboutSection, content, heading, subHeading, layout, img
} = style;

interface IAboutSectionProps {
  data: IAboutdata
}

const AboutSection = ({ data }: IAboutSectionProps) => {
  return (
    <div className={aboutSection}>
      <div className={content}>
        <h2 className={heading}>{data.title}</h2>
        <h4 className={subHeading}>
          <span>{data.subTitleOne}</span>
          <span>{data.subTitleTwo}</span>
        </h4>
      </div>
      <div className={layout}>
        <Image className={img} src={layoutImage} alt='layout'/>
      </div>
    </div>
  );
};

export default AboutSection;
