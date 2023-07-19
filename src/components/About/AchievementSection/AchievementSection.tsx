import React from 'react';

import imageOne from '@/assets/images/about/achievementSection/grid-1.jpg';
import imageTwo from '@/assets/images/about/achievementSection/grid-2.jpg';

import achievementsData from '@/assets/data/achievements';

import style from './achievementSection.module.scss';
import Image from 'next/image';

const {
  achievementSection,
  img,
  verticalTopLine,
  verticalBottomLine,
  horizontalLeftLine,
  squareBox,
  horizontalRightLine,
  heading,
  text,
  imageContainer,
  contentContainer,
  contentContainerReverse,
  imageContainerReverse
} = style;

const AchievementSection = () => {
  const firstAchievement = achievementsData.filter(achievement => achievement.id === 1);
  const achievements = achievementsData.filter(achievement => achievement.id !== 1);

  return (
    <div className={achievementSection}>
      {
        firstAchievement.map((data) => {
          return (
            <>
              <div className={imageContainer}>
                <Image className={img} src={imageOne} alt='1996-2000'/>
              </div>
              <div className={verticalTopLine}/>
              <div className={contentContainer}>
                <h3 className={heading}>{data.title}</h3>
                <p className={text}>08 Health centers were Installed</p>
                <p className={text}>Community based Primary Health Care program launched</p>
                <p className={text}>Domiciliary Service began to operate</p>
                <p className={text}>Satellite Health Program was introduced</p>
                <p className={text}>Introduced Micro Health Insurance</p>
                <p className={text}>30,000+ patients were served in the year of inception</p>
                <p className={text}>Well-being Program was launched</p>
                <p className={text}>Initiated Emergency Response Program</p>
              </div>
            </>
          );
        })
      }
      {
        achievements.map(data => {
          if (data.id % 2 === 0) {
            return (
              <>
                <div className={horizontalLeftLine}/>
                <div className={squareBox}/>
                <div className={horizontalRightLine}/>
                <div className={`${contentContainer} ${contentContainerReverse}`}>
                  <h3 className={heading}>{data.title}</h3>
                  <p className={text}>08 Health centers were Installed</p>
                  <p className={text}>Community based Primary Health Care program launched</p>
                  <p className={text}>Domiciliary Service began to operate</p>
                  <p className={text}>Satellite Health Program was introduced</p>
                  <p className={text}>Introduced Micro Health Insurance</p>
                  <p className={text}>30,000+ patients were served in the year of inception</p>
                  <p className={text}>Well-being Program was launched</p>
                </div>
                <div className={verticalBottomLine}/>
                <div className={`${imageContainer} ${imageContainerReverse}`}>
                  <Image className={img} src={imageTwo} alt='2001-2005'/>
                </div>
              </>
            );
          }
          return (
            <>
              <div className={horizontalLeftLine}/>
              <div className={squareBox}/>
              <div className={horizontalRightLine}/>
              <div className={imageContainer}>
                <Image className={img} src={imageTwo} alt='2001-2005'/>
              </div>
              <div className={verticalBottomLine}/>
              <div className={contentContainer}>
                <h3 className={heading}>{data.title}</h3>
                <p className={text}>08 Health centers were Installed</p>
                <p className={text}>Community based Primary Health Care program launched</p>
                <p className={text}>Domiciliary Service began to operate</p>
                <p className={text}>Satellite Health Program was introduced</p>
                <p className={text}>Introduced Micro Health Insurance</p>
                <p className={text}>30,000+ patients were served in the year of inception</p>
                <p className={text}>Well-being Program was launched</p>
              </div>
            </>
          );
        })
      }
    </div>
  );
};

export default AchievementSection;
