import React from 'react';
import Image from 'next/image';

import bmImage from '@/assets/images/about/boardMember/1643174518_Nurjahan-Begum.png';

import style from './boardMemberCard.module.scss';
import { IBoardMember } from '@/shared/types/boardMember';

const {
  boardMemberCard, imageContainer, img, memberName, designation
} = style;

interface IBoardMemberCardProps {
  data: IBoardMember
}

const BoardMemberCard = ({ data }: IBoardMemberCardProps) => {
  return (
    <div className={boardMemberCard}>
      <div className={imageContainer}>
        <Image className={img} src={bmImage} alt='member'/>
      </div>
      <p className={memberName}>{data.name}</p>
      <p className={designation}>{data.designation}</p>
    </div>
  );
};

export default BoardMemberCard;
