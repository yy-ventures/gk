import React from 'react';
import Image from 'next/image';

import boardMemberData from '@/assets/data/boardMember';
import layoutTR from '@/assets/layout/layout-tr-large.svg';
import layoutBL from '@/assets/layout/line-leaf.svg';

import { BoardMemberCard } from '../BoardMemberCard';
import style from './boardMember.module.scss';

const {
  boardMember, layoutRight, layoutLeft, img, memberCardContainer
} = style;

const BoardMember = () => {
  return (
    <div className={boardMember}>
      <div className={layoutRight}>
        <Image className={img} src={layoutTR} alt='layout'/>
      </div>
      <div className={layoutLeft}>
        <Image className={img} src={layoutBL} alt='layout'/>
      </div>
      {
        boardMemberData.map((data) => (
          <div className={memberCardContainer} key={data.id}>
            <BoardMemberCard memberData={data}/>
          </div>
        ))
      }
    </div>
  );
};

export default BoardMember;
