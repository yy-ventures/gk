import React from 'react';

import style from './heroSection.module.scss';

const { heroSection, small } = style;

const HeroSection = () => {
  return (
    <div className={heroSection}>
      <h1>Welcome to Grameen Kalyan</h1>
      <h2>Welcome to Grameen Kalyan</h2>
      <h3>Welcome to Grameen Kalyan</h3>
      <h4>Welcome to Grameen Kalyan</h4>
      <h5>Welcome to Grameen Kalyan</h5>
      <h6>Welcome to Grameen Kalyan</h6>
      <h6 className={small}>Welcome to Grameen Kalyan</h6>
    </div>
  );
};

export default HeroSection;
