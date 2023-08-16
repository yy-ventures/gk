'use client';

import React from 'react';
import Image from 'next/image';

import { IBoardMemberData } from './boardMember.type';
import { IMAGE_BASE_URL } from '@/config';

interface IBoardMemberCardProps {
  memberData: IBoardMemberData
}

import style from './boardMemberCard.module.scss';

const {
  memberCard,
  contentContainer,
  descContainer,
  memberName,
  desig,
  imageContainer,
  img,
  reverseDescContainer,
  reverseMemberCard,
  reverseImageContainer
} = style;

const BoardMemberCard = ({ memberData }: IBoardMemberCardProps) => {
  return (
    <>
      {
        memberData.reverse
          ? <div className={`${memberCard} ${reverseMemberCard}`}>
            <div className={`${imageContainer} ${reverseImageContainer}`}>
              <Image className={img} src={IMAGE_BASE_URL + memberData.image} width={100} height={100} loader={() => IMAGE_BASE_URL + memberData.image} alt='Yunus'/>
            </div>
            <div className={contentContainer}>
              <div className={`${descContainer} ${reverseDescContainer}`}>
                <p>{memberData.description}</p>
              </div>
              <h5 className={memberName}>{memberData.name}</h5>
              <span className={desig}>{memberData.designation}</span>
            </div>
          </div> : null
      }
      {
        !memberData.reverse ? <div className={memberCard}>
          <div className={contentContainer}>
            <div className={descContainer} dangerouslySetInnerHTML={{ __html: memberData.description }}>
            </div>
            <h5 className={memberName}>{memberData.name}</h5>
            <span className={desig}>{memberData.designation}</span>
          </div>
          <div className={imageContainer}>
            <Image className={img} src={IMAGE_BASE_URL + memberData.image} width={100} height={100} loader={() => IMAGE_BASE_URL + memberData.image} alt='Yunus'/>
          </div>
        </div> : null
      }
    </>
  );
};

export default BoardMemberCard;
