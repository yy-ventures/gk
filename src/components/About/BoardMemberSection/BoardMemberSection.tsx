import React from 'react';

import boardMembersData from '@/assets/data/boardMembers';

import BoardMemberCard from './BoardMemberCard/BoardMemberCard';
import HorizontalLayout from './HorizontalLayout/HorizontalLayout';
import style from './boardMemberSection.module.scss';

const {
  boardMemberSection,
  heading,
  gridContainer,
  layout,
  cardContainer
} = style;

const BoardMemberSection = () => {
  const chairman = boardMembersData.filter(data => data.designation === 'Chairman');
  const boardMembers = boardMembersData.filter(data => data.designation !== 'Chairman');
  let counter = 0;

  return (
    <div className={boardMemberSection}>
      <h2 className={heading}>Board Members</h2>
      {
        chairman.map(data => {
          return (
            <>
              <div className={cardContainer}>
                <BoardMemberCard data={data}/>
              </div>
              <HorizontalLayout/>
            </>
          );
        })
      }
      <div className={gridContainer}>
        {
          boardMembers.map((data, index) => {
            const isAfterFourMember = (index + 1) % 4 === 0;
            const isDataEnd = index === boardMembers.length - 1;
            const counterArray: number[] = [];
            const oddNumber = counterArray.filter(count => count % 2 !== 0);
            const evenNumber = counterArray.filter(count => count % 2 === 0);

            if (isAfterFourMember === true) {
              counter += 1;
              counterArray.push(counter);
            }

            return (
              <>
                <div className={cardContainer}>
                  <BoardMemberCard data={data}/>
                </div>
                {
                  counterArray.map(counter => {
                    const oddNumber = counter % 2 !== 0;
                    const evenNumber = counter % 2 === 0;

                    return (
                      evenNumber
                        ? <div className={layout}>
                          <HorizontalLayout/>
                        </div>
                        : oddNumber
                          ? <div className={layout}>
                            <HorizontalLayout reverse={true}/>
                          </div>
                          : null
                    );
                  })
                }
                {
                  isDataEnd && evenNumber
                    ? <div className={layout}>
                      <HorizontalLayout/>
                    </div>
                    : isDataEnd && oddNumber
                      ? <div className={layout}>
                        <HorizontalLayout reverse={true}/>
                      </div>
                      : null
                }
              </>
            );
          })
        }
      </div>
    </div>
  );
};

export default BoardMemberSection;
