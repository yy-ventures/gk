import React from 'react';
import Image from 'next/image';

import layoutTL from '@/assets/layout/grid-top-leaf.svg';

import style from './aboutUs.module.scss';

const {
  aboutUs, heading, parag, layoutLeft, img
} = style;

const AboutUs = () => {
  return (
    <div className={aboutUs}>
      <div className={layoutLeft}>
        <Image className={img} src={layoutTL} alt='layout'/>
      </div>
      <h2 className={heading}>
        <span>a social business company</span>
        <span>since 1996</span>
      </h2>
      <p className={parag}>
        GRAMEEN KALYAN is a not-for-profit, Social Business
        Company in the Grameen family of companies; established
        in 1996, registered with RJSC under the Companies Act
        (C-388(08)/96) on 06 November 1996 and with NGO Affairs
        Bureau (No - 1725) on 02 July 2002. Nobel Peace Laureate
        and Olympic Laurel Professor Muhammad Yunus is the Founder
        and Chairman of Grameen Kalyan.
      </p>
      <p className={parag}>
        Grameen Kalyan’s 25 years of experience reveals that,
        SOCIAL BUSINESS is not only a feasible, effective &
        financially sustainable model for providing Primary
        Healthcare in developing countries but also potentially
        capable of achieving scale maintaining the affordability.
      </p>
    </div>
  );
};

export default AboutUs;
