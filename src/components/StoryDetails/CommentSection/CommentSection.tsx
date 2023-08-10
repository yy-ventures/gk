'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { BASE_URL } from '@/config';
import { FormErrorMessage, SuccessMessage } from '@/shared/components';

interface IformInputs {
  fullName: string
  email: string
  comment: string
}

import style from './commentSection.module.scss';
import CommentCard from './CommentCard/CommentCard';

const {
  commentSection,
  heading,
  divider,
  lineLeft,
  box,
  lineRight,
  formContainer,
  commentContainer,
  form,
  fullNameBox,
  emailBox,
  commentBox,
  required,
  submitBtn,
  cardContainer
} = style;

const CommentSection = () => {
  // Form Submission Successful
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IformInputs>();

  const onSubmit: SubmitHandler<IformInputs> = async (data) => {
    console.log('Data: ', data);

    const userFormData = new FormData();
    const commentFormData = new FormData();

    // User Data
    userFormData.append('name', data.fullName);
    userFormData.append('email', data.email);

    try {
      const response = await fetch(BASE_URL + '/anonymous-user', {
        method: 'POST',
        body: userFormData
      });

      if (!response.ok) {
        throw new Error('Request fail');
      }
      setSubmissionSuccessful(true);
    } catch (error: unknown) {
      const errorInstance = error instanceof Error;
      const errMessage = errorInstance ? error.message : 'Something went wrong';
      setErrorMessage(errMessage);
    }

    const anonymousUser = async () => {
      try {
        const res = await fetch(BASE_URL + `/anonymous-user?email=${data.fullName}`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        return res.json();
      } catch (error: unknown) {
        const errorInstance = error instanceof Error;
        const errMessage = errorInstance ? error.message : 'Something went wrong';
        return errMessage;
      }
    };

    const userId = await anonymousUser();

    // Comment Data
    commentFormData.append('user_id', userId);
    commentFormData.append('comment', data.comment);

    try {
      const response = await fetch(BASE_URL + '/comments', {
        method: 'POST',
        body: userFormData
      });

      if (!response.ok) {
        throw new Error('Request fail');
      }
      setSubmissionSuccessful(true);
    } catch (error: unknown) {
      const errorInstance = error instanceof Error;
      const errMessage = errorInstance ? error.message : 'Something went wrong';
      setErrorMessage(errMessage);
    }
  };

  return (
    <div className={commentSection}>
      <h2 className={heading}>Comments</h2>
      <div className={divider}>
        <div className={lineLeft}/>
        <div className={box}/>
        <div className={lineRight}/>
      </div>

      <div className={formContainer}>
        <form className={form} onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className={`${fullNameBox} ${box}`}>
            <label htmlFor="fullName">Full Name<span className={required}>*</span>:</label>
            <input
              id='fullName'
              type='text'
              {...register('fullName', { required: true })}
            />
            <p>Must be 3-20 characters long.</p>
          </div>
          <div className={`${emailBox} ${box}`}>
            <label htmlFor="email">Email ID<span className={required}>*</span>:</label>
            <input
              id='email'
              type='text'
              {...register('email', { required: true })}
            />
            <p>Email should be valid email.</p>
          </div>
          <div className={`${commentBox} ${box}`}>
            <label htmlFor="comment">Comment<span className={required}>*</span>:</label>
            <textarea
              id='comment'
              rows={6}
              {...register('comment', { required: true })}
            />
            <p>Must be 3-100 characters long.</p>
          </div>
          <input className={submitBtn} type="submit" value='Post Comment' disabled={isSubmitting}/>
        </form>
        {submissionSuccessful && <SuccessMessage textMessage='Application submitted successfully!'/>}
      </div>

      <div className={commentContainer}>
        <div className={cardContainer}>
          <CommentCard/>
        </div>
        <div className={cardContainer}>
          <CommentCard/>
        </div>
        <div className={cardContainer}>
          <CommentCard/>
        </div>
        <div className={cardContainer}>
          <CommentCard/>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
