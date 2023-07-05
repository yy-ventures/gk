import React from 'react';
import { ServiceCard } from '../ServiceCard';

import style from './serviceSection.module.scss';

const {
  serviceSection,
  layout,
  contentContainer,
  services,
  content,
  text,
  btn,
  serviceOne,
  serviceTwo,
  serviceThree,
  serviceFour,
  vLineOne,
  vLineTwo,
  hLineOne,
  hLineTwo,
  squareBox
} = style;

const ServiceSection = () => {
  return (
    <div className={serviceSection}>
      <div className={layout}/>
      <div className={contentContainer}>
        <div className={services}>
          <div className={serviceOne}>
            <ServiceCard/>
          </div>
          <div className={serviceTwo}>
            <ServiceCard/>
          </div>
          <div className={serviceThree}>
            <ServiceCard/>
          </div>
          <div className={serviceFour}>
            <ServiceCard/>
          </div>
          <div className={vLineOne}/>
          <div className={vLineTwo}/>
          <div className={hLineOne}/>
          <div className={hLineTwo}/>
          <div className={squareBox}/>
        </div>
        <div className={content}>
          <h2 className={text}>
            Millions of People at Bottom of the Pyramid are Served with Empathy and Care
          </h2>
          <button className={btn}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
