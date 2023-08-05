import React from 'react';

import style from './commentCard.module.scss';

const {
  commentCard, header, userName, commentDate, comment
} = style;

const CommentCard = () => {
  return (
    <div className={commentCard}>
      <div className={header}>
        <p className={userName}>ZAP</p>
        <p className={commentDate}>2023-07-14 02:18:12</p>
      </div>
      <div className={comment}>
        <p>Zaproxy dolore alias impedit expedita quisquam.</p>
      </div>
    </div>
  );
};

export default CommentCard;
