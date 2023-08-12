import React from 'react';

import { IComment } from '@/shared/types/comment';
import style from './commentCard.module.scss';

const {
  commentCard, header, userName, commentDate, comment
} = style;

interface ICommentCard{
  commentData: IComment
}

const CommentCard = ({ commentData }: ICommentCard) => {
  return (
    <div className={commentCard}>
      <div className={header}>
        <p className={userName}>ZAP</p>
        <p className={commentDate}>{commentData.created_at}</p>
      </div>
      <div className={comment}>
        <p>{commentData.comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
