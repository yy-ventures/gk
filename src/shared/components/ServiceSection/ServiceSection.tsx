import React from 'react';
import { ServiceCard } from '../ServiceCard';

import { Button } from '@/shared/components';

import style from './serviceSection.module.scss';
import { IServiceSectionData } from '@/shared/types/ServiceSection';
import Link from 'next/link';

const {
  serviceSection,
  layout,
  contentContainer,
  services,
  content,
  text,
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

interface IServiceSectionProps{
  serviceData: IServiceSectionData[]
}

const ServiceSection = ({ serviceData }: IServiceSectionProps) => {
  return (
    <div className={serviceSection}>
      <div className={layout}/>
      <div className={contentContainer}>
        <div className={services}>
          {
            serviceData.map((data) => (
              <Link key={data.id} href={data.title === 'Healthcare' ? '/services#healthcare' : data.title === 'Well-Being' ? '/services#well-being' : data.title === 'Emergency Response' ? '/services#emergency-response' : data.title === 'Social Business' ? '/services#social-business' : '#'}>
                <div className={data.id === 1 ? `${serviceOne}` : data.id === 2 ? `${serviceTwo}` : data.id === 3 ? `${serviceThree}` : data.id === 4 ? `${serviceFour}` : ''}>
                  <ServiceCard service={data}/>
                </div>
              </Link>
            ))
          }
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
          <Button text='read more' url='/services'/>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
