import React from 'react';

import boardMembersData from '@/assets/data/boardMembers';
import { IBoardMember } from '@/shared/types/boardMember';
import { handleMiddleIndex } from './boardMemberSection.helpers';

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
//   let middleIndexOne = 1;

//   const middleDataOne = dataSet.map((data: IBoardMember, index: number) => {
//     let array;

//     if (index === middleIndexOne) {
//       middleIndexOne += 4;
//       array = data;
//     }
//     return array;
//   });

//   const filterMiddleDataOne = middleDataOne.filter(data => data !== undefined);

//   return filterMiddleDataOne;
// };

const BoardMemberSection = () => {
  const chairman = boardMembersData.filter(data => data.designation === 'Chairman');
  const boardMembers = boardMembersData.filter(data => data.designation !== 'Chairman');
  const middleDataOne = handleMiddleIndex(boardMembers, 1);
  const middleDataTwo = handleMiddleIndex(boardMembers, 2);
  let counter = 0;

  console.log('filterMiddleDataOne: ', handleMiddleIndex(boardMembers, 1));
  console.log('filterMiddleDataTwo: ', handleMiddleIndex(boardMembers, 2));

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
                  {/* <p>{checkData && checkData}</p> */}
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
