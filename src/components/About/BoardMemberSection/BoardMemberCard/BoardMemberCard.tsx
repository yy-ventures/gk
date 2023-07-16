import React from 'react';
import Image from 'next/image';

import bmImage from '@/assets/images/about/boardMember/1643174518_Nurjahan-Begum.png';

import style from './boardMemberCard.module.scss';
import { IBoardMember } from '@/shared/types/boardMember';

const {
  boardMemberCard,
  imageContainer,
  img,
  memberName,
  designation,
  cardStyleOne,
  cardStyleTwo,
  cardStyleThree
} = style;

interface IBoardMemberCardProps {
  data: IBoardMember | undefined
  typeOne?: boolean
  typeTwo?: boolean
  typeThree?: boolean
}

const BoardMemberCard = ({
  data, typeOne, typeTwo, typeThree
}: IBoardMemberCardProps) => {
  return (
    <div className={typeOne ? `${boardMemberCard} ${cardStyleOne}` : typeTwo ? `${boardMemberCard} ${cardStyleTwo}` : typeThree ? `${boardMemberCard} ${cardStyleThree}` : `${boardMemberCard}`}>
      <div className={imageContainer}>
        <Image className={img} src={bmImage} alt='member'/>
      </div>
      <p className={memberName}>{data && data.name}</p>
      <p className={designation}>{data && data.designation}</p>
    </div>
  );
};

export default BoardMemberCard;
