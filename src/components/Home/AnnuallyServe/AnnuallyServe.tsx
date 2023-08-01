import React from 'react';

import { IAnnuallyServe } from '@/shared/types/annuallyServe';

import style from './annuallyServe.module.scss';

const {
  annuallyServe, firstText, number, secondText
} = style;

interface IAnnuallyServeProps {
  data: IAnnuallyServe[]
}

const AnnuallyServe = (data: IAnnuallyServeProps) => {
  const annuallyServeData = data.data[0];
  return (
    <div className={annuallyServe}>
      <h3 className={firstText}>{annuallyServeData.title}</h3>
      <h2 className={number}>{annuallyServeData.value}+</h2>
      <h3 className={secondText}>People Across 30 Districts in Bangladesh</h3>
    </div>
  );
};

export default AnnuallyServe;
