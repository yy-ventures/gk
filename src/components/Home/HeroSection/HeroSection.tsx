import React from 'react';

import style from './heroSection.module.scss';

const { heroSection } = style;

const HeroSection = () => {
  return (
    <div className={heroSection}>
      <h1>Welcome to Grameen Kalyan</h1>
    </div>
  );
};

export default HeroSection;
