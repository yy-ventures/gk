import React from 'react';
import Image from 'next/image';

import layoutTopLeft from '@/assets/layout/layout-tl-healthcare.svg';
import layoutBottomRight from '@/assets/layout/grid-bottom-leaf.svg';
import healthcareServiceData from '@/assets/data/healthcareService';
import imageOne from '@/assets/images/healthcare/grid-1.webp';

import style from './healthcareService.module.scss';

const {
  healthcareService,
  layoutTL,
  layoutBR,
  gridContainer,
  healthcareServiceCard,
  imageContainer,
  img,
  heading,
  verticalLine,
  horizontalLine,
  box
} = style;

const HealthcareService = () => {
  return (
    <div className={healthcareService}>
      <div className={layoutTL}>
        <Image className={img} src={layoutTopLeft} alt='layout'/>
      </div>
      <div className={layoutBR}>
        <Image className={img} src={layoutBottomRight} alt='layout'/>
      </div>
      <div className={gridContainer}>
        {
          healthcareServiceData.map((data, index) => {
            return (
              <>
                <div key={data.id} className={healthcareServiceCard}>
                  <div className={imageContainer}>
                    <Image className={img} src={imageOne} alt='healthcare'/>
                  </div>
                  <h3 className={heading}>{data.title}</h3>
                </div>
                {
                  index % 2 === 0 && <div className={verticalLine}/>
                }
                {
                  index === 1 && <>
                    <div className={horizontalLine}/>
                    <div className={box}/>
                    <div className={horizontalLine}/>
                  </>
                }
                {
                  index === 3 && <>
                    <div className={horizontalLine}/>
                    <div className={box}/>
                    <div className={horizontalLine}/>
                  </>
                }
                {
                  index === 5 && <>
                    <div className={horizontalLine}/>
                    <div className={box}/>
                    <div className={horizontalLine}/>
                  </>
                }
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default HealthcareService;
