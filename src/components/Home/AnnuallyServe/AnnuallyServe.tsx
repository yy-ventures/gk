import React from 'react';

import style from './annuallyServe.module.scss';

const {
  annuallyServe, firstText, number, secondText
} = style;

const AnnuallyServe = () => {
  return (
    <div className={annuallyServe}>
      <h3 className={firstText}>Annually we Serve</h3>
      <h2 className={number}>7580000+</h2>
      <h3 className={secondText}>People Across 30 Districts in Bangladesh</h3>
    </div>
  );
};

export default AnnuallyServe;
